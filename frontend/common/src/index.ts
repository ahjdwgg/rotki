import { default as BigNumber } from "bignumber.js";
import { z } from "zod";

export type Nullable<T> = T | null;

export type SemiPartial<T, Ps extends keyof T> = Pick<T, Ps> & Partial<T>;

export type AddressIndexed<T> = {
  readonly [address: string]: T
}

export const NumericString = z.string().transform(arg => new BigNumber(arg));

export const Balance = z.object({
  amount: NumericString,
  usdValue: NumericString
})

export type Balance = z.infer<typeof Balance>
export const AssetEntry = z.object({
  asset: z.string().nonempty()
});
export const AssetBalance = Balance.merge(AssetEntry);
export type AssetBalance = z.infer<typeof AssetBalance>