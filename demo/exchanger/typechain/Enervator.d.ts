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

interface EnervatorInterface extends Interface {
  functions: {
    approve: TypedFunctionDescription<{
      encode([spender, value]: [string, BigNumberish]): string;
    }>;

    transferFrom: TypedFunctionDescription<{
      encode([holder, recipient, amount]: [
        string,
        string,
        BigNumberish
      ]): string;
    }>;

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

    transfer: TypedFunctionDescription<{
      encode([recipient, amount]: [string, BigNumberish]): string;
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
      encode([_amount, userData, operatorData]: [
        BigNumberish,
        Arrayish,
        Arrayish
      ]): string;
    }>;
  };

  events: {
    Transfer: TypedEventDescription<{
      encodeTopics([from, to, value]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

    Approval: TypedEventDescription<{
      encodeTopics([owner, spender, value]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

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

export class Enervator extends Contract {
  connect(signerOrProvider: Signer | Provider | string): Enervator;
  attach(addressOrName: string): Enervator;
  deployed(): Promise<Enervator>;

  on(event: EventFilter | string, listener: Listener): Enervator;
  once(event: EventFilter | string, listener: Listener): Enervator;
  addListener(eventName: EventFilter | string, listener: Listener): Enervator;
  removeAllListeners(eventName: EventFilter | string): Enervator;
  removeListener(eventName: any, listener: Listener): Enervator;

  interface: EnervatorInterface;

  functions: {
    balanceOf(tokenHolder: string): Promise<BigNumber>;

    isOperatorFor(operator: string, tokenHolder: string): Promise<boolean>;

    allowance(holder: string, spender: string): Promise<BigNumber>;

    approve(
      spender: string,
      value: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferFrom(
      holder: string,
      recipient: string,
      amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

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

    transfer(
      recipient: string,
      amount: BigNumberish,
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
      userData: Arrayish,
      operatorData: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    defaultOperators(): Promise<(string)[]>;
    name(): Promise<string>;
    totalSupply(): Promise<BigNumber>;
    decimals(): Promise<number>;
    granularity(): Promise<BigNumber>;
    symbol(): Promise<string>;
  };

  filters: {
    Transfer(from: string | null, to: string | null, value: null): EventFilter;

    Approval(
      owner: string | null,
      spender: string | null,
      value: null
    ): EventFilter;

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
    approve(spender: string, value: BigNumberish): Promise<BigNumber>;

    transferFrom(
      holder: string,
      recipient: string,
      amount: BigNumberish
    ): Promise<BigNumber>;

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

    transfer(recipient: string, amount: BigNumberish): Promise<BigNumber>;

    revokeOperator(operator: string): Promise<BigNumber>;

    operatorBurn(
      account: string,
      amount: BigNumberish,
      data: Arrayish,
      operatorData: Arrayish
    ): Promise<BigNumber>;

    burn(amount: BigNumberish, data: Arrayish): Promise<BigNumber>;

    addSupply(
      _amount: BigNumberish,
      userData: Arrayish,
      operatorData: Arrayish
    ): Promise<BigNumber>;
  };
}
