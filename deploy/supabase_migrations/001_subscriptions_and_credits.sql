-- LoopCanvas AI — Supabase Schema for Creem Payment Integration
-- Phase 4c — SOP-4C-03 + SOP-4C-04

-- ===== subscriptions 表 =====
CREATE TABLE IF NOT EXISTS subscriptions (
  id              uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id         uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  plan            text NOT NULL CHECK (plan IN ('Free', 'Pro', 'Team')),
  status          text NOT NULL CHECK (status IN ('active', 'trialing', 'past_due', 'canceled', 'expired', 'unpaid')),
  provider        text NOT NULL DEFAULT 'creem',
  provider_subscription_id text,
  provider_customer_id     text,
  provider_event_id        text UNIQUE,
  current_period_start     timestamptz,
  current_period_end       timestamptz,
  created_at      timestamptz DEFAULT now(),
  updated_at      timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Users can only read their own subscriptions
CREATE POLICY "Users can read own subscriptions"
  ON subscriptions FOR SELECT
  USING (auth.uid() = user_id);

-- ===== credits 表 =====
CREATE TABLE IF NOT EXISTS credits (
  id          uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id     uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  total       int NOT NULL DEFAULT 0,
  used        int NOT NULL DEFAULT 0,
  reset_at    timestamptz,
  updated_at  timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE credits ENABLE ROW LEVEL SECURITY;

-- Users can only read/update their own credits
CREATE POLICY "Users can read own credits"
  ON credits FOR SELECT
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own credits"
  ON credits FOR UPDATE
  USING (auth.uid() = user_id);

-- Service role can insert/upsert (for webhooks)
CREATE POLICY "Service role can manage credits"
  ON credits FOR ALL
  USING (true)
  WITH CHECK (true);

-- ===== 触发器: 新用户自动创建 Free 额度 =====
CREATE OR REPLACE FUNCTION public.handle_new_user_credits()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.credits (user_id, total, used, reset_at)
  VALUES (NEW.id, 5, 0, now() + interval '1 day');
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 仅在触发器不存在时创建
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'on_auth_user_created_credits'
  ) THEN
    CREATE TRIGGER on_auth_user_created_credits
      AFTER INSERT ON auth.users
      FOR EACH ROW
      EXECUTE FUNCTION public.handle_new_user_credits();
  END IF;
END
$$;
