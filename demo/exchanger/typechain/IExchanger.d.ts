/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface IExchangerInterface extends Interface {
  functions: {
    setComponents: TypedFunctionDescription<{
      encode([_depositDB, _forexDB]: [string, string]): string;
    }>;

    deposit: TypedFunctionDescription<{
      encode([_depositor, _depositRef, _code, _amount]: [
        string,
        Arrayish,
        Arrayish,
        BigNumberish
      ]): string;
    }>;

    setCanWithdraw: TypedFunctionDescription<{
      encode([_depositRef]: [Arrayish]): string;
    }>;

    setRate: TypedFunctionDescription<{
      encode([_code, _rate]: [Arrayish, BigNumberish]): string;
    }>;

    buy: TypedFunctionDescription<{
      encode([_buyer, _buyRef, _depositRef, _amountFIAT]: [
        string,
        Arrayish,
        Arrayish,
        BigNumberish
      ]): string;
    }>;

    bought: TypedFunctionDescription<{
      encode([_buyer, _amountEOR, _buyData]: [
        string,
        BigNumberish,
        Arrayish
      ]): string;
    }>;
  };

  events: {};
}

export class IExchanger extends Contract {
  connect(signerOrProvider: Signer | Provider | string): IExchanger;
  attach(addressOrName: string): IExchanger;
  deployed(): Promise<IExchanger>;

  on(event: EventFilter | string, listener: Listener): IExchanger;
  once(event: EventFilter | string, listener: Listener): IExchanger;
  addListener(eventName: EventFilter | string, listener: Listener): IExchanger;
  removeAllListeners(eventName: EventFilter | string): IExchanger;
  removeListener(eventName: any, listener: Listener): IExchanger;

  interface: IExchangerInterface;

  functions: {
    setComponents(
      _depositDB: string,
      _forexDB: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    deposit(
      _depositor: string,
      _depositRef: Arrayish,
      _code: Arrayish,
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setCanWithdraw(
      _depositRef: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setRate(
      _code: Arrayish,
      _rate: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    buy(
      _buyer: string,
      _buyRef: Arrayish,
      _depositRef: Arrayish,
      _amountFIAT: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    bought(
      _buyer: string,
      _amountEOR: BigNumberish,
      _buyData: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;
  };

  filters: {};

  estimate: {
    setComponents(_depositDB: string, _forexDB: string): Promise<BigNumber>;

    deposit(
      _depositor: string,
      _depositRef: Arrayish,
      _code: Arrayish,
      _amount: BigNumberish
    ): Promise<BigNumber>;

    setCanWithdraw(_depositRef: Arrayish): Promise<BigNumber>;

    setRate(_code: Arrayish, _rate: BigNumberish): Promise<BigNumber>;

    buy(
      _buyer: string,
      _buyRef: Arrayish,
      _depositRef: Arrayish,
      _amountFIAT: BigNumberish
    ): Promise<BigNumber>;

    bought(
      _buyer: string,
      _amountEOR: BigNumberish,
      _buyData: Arrayish
    ): Promise<BigNumber>;
  };
}
