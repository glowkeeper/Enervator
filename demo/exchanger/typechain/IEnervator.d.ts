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

interface IEnervatorInterface extends Interface {
  functions: {
    operatorSend: TypedFunctionDescription<{
      encode([sender, recipient, amount, data, operatorData]: [
        string,
        string,
        BigNumberish,
        Arrayish,
        Arrayish
      ]): string;
    }>;

    authorizeOperator: TypedFunctionDescription<{
      encode([operator]: [string]): string;
    }>;

    send: TypedFunctionDescription<{
      encode([recipient, amount, data]: [
        string,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    revokeOperator: TypedFunctionDescription<{
      encode([operator]: [string]): string;
    }>;

    operatorBurn: TypedFunctionDescription<{
      encode([account, amount, data, operatorData]: [
        string,
        BigNumberish,
        Arrayish,
        Arrayish
      ]): string;
    }>;

    burn: TypedFunctionDescription<{
      encode([amount, data]: [BigNumberish, Arrayish]): string;
    }>;

    addSupply: TypedFunctionDescription<{
      encode([_amount]: [BigNumberish]): string;
    }>;
  };

  events: {
    Sent: TypedEventDescription<{
      encodeTopics([operator, from, to, amount, data, operatorData]: [
        string | null,
        string | null,
        string | null,
        null,
        null,
        null
      ]): string[];
    }>;

    Minted: TypedEventDescription<{
      encodeTopics([operator, to, amount, data, operatorData]: [
        string | null,
        string | null,
        null,
        null,
        null
      ]): string[];
    }>;

    Burned: TypedEventDescription<{
      encodeTopics([operator, from, amount, data, operatorData]: [
        string | null,
        string | null,
        null,
        null,
        null
      ]): string[];
    }>;

    AuthorizedOperator: TypedEventDescription<{
      encodeTopics([operator, tokenHolder]: [
        string | null,
        string | null
      ]): string[];
    }>;

    RevokedOperator: TypedEventDescription<{
      encodeTopics([operator, tokenHolder]: [
        string | null,
        string | null
      ]): string[];
    }>;
  };
}

export class IEnervator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): IEnervator;
  attach(addressOrName: string): IEnervator;
  deployed(): Promise<IEnervator>;

  on(event: EventFilter | string, listener: Listener): IEnervator;
  once(event: EventFilter | string, listener: Listener): IEnervator;
  addListener(eventName: EventFilter | string, listener: Listener): IEnervator;
  removeAllListeners(eventName: EventFilter | string): IEnervator;
  removeListener(eventName: any, listener: Listener): IEnervator;

  interface: IEnervatorInterface;

  functions: {
    balanceOf(owner: string): Promise<BigNumber>;

    isOperatorFor(operator: string, tokenHolder: string): Promise<boolean>;

    operatorSend(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      data: Arrayish,
      operatorData: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    authorizeOperator(
      operator: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    send(
      recipient: string,
      amount: BigNumberish,
      data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    revokeOperator(
      operator: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    operatorBurn(
      account: string,
      amount: BigNumberish,
      data: Arrayish,
      operatorData: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    burn(
      amount: BigNumberish,
      data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    addSupply(
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    defaultOperators(): Promise<(string)[]>;
    name(): Promise<string>;
    totalSupply(): Promise<BigNumber>;
    granularity(): Promise<BigNumber>;
    symbol(): Promise<string>;
  };

  filters: {
    Sent(
      operator: string | null,
      from: string | null,
      to: string | null,
      amount: null,
      data: null,
      operatorData: null
    ): EventFilter;

    Minted(
      operator: string | null,
      to: string | null,
      amount: null,
      data: null,
      operatorData: null
    ): EventFilter;

    Burned(
      operator: string | null,
      from: string | null,
      amount: null,
      data: null,
      operatorData: null
    ): EventFilter;

    AuthorizedOperator(
      operator: string | null,
      tokenHolder: string | null
    ): EventFilter;

    RevokedOperator(
      operator: string | null,
      tokenHolder: string | null
    ): EventFilter;
  };

  estimate: {
    operatorSend(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      data: Arrayish,
      operatorData: Arrayish
    ): Promise<BigNumber>;

    authorizeOperator(operator: string): Promise<BigNumber>;

    send(
      recipient: string,
      amount: BigNumberish,
      data: Arrayish
    ): Promise<BigNumber>;

    revokeOperator(operator: string): Promise<BigNumber>;

    operatorBurn(
      account: string,
      amount: BigNumberish,
      data: Arrayish,
      operatorData: Arrayish
    ): Promise<BigNumber>;

    burn(amount: BigNumberish, data: Arrayish): Promise<BigNumber>;

    addSupply(_amount: BigNumberish): Promise<BigNumber>;
  };
}