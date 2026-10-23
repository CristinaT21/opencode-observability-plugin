import type { PluginInput } from "@opencode-ai/plugin";
import { Context as EffectContext } from "effect";

export type OpencodeClient = Pick<
  PluginInput["client"],
  "app" | "tool" | "session"
>;

export class OpencodeClientService extends EffectContext.Service<
  OpencodeClientService,
  OpencodeClient
>()("OpencodeClientService") {}
