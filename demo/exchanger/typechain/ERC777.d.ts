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

interface ERC777Interface extends Interface {
  functions: {
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

    burn: TypedFunctionDescription<{
      encode([amount, data]: [BigNumberish, Arrayish]): string;
    }>;

    authorizeOperator: TypedFunctionDescription<{
      encode([operator]: [string]): string;
    }>;

    revokeOperator: TypedFunctionDescription<{
      encode([operator]: [string]): string;
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

    operatorBurn: TypedFunctionDescription<{
      encode([account, amount, data, operatorData]: [
        string,
        BigNumberish,
        Arrayish,
        Arrayish
      ]): string;
    }>;

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

export class ERC777 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): ERC777;
  attach(addressOrName: string): ERC777;
  deployed(): Promise<ERC777>;

  on(event: EventFilter | string, listener: Listener): ERC777;
  once(event: EventFilter | string, listener: Listener): ERC777;
  addListener(eventName: EventFilter | string, listener: Listener): ERC777;
  removeAllListeners(eventName: EventFilter | string): ERC777;
  removeListener(eventName: any, listener: Listener): ERC777;

  interface: ERC777Interface;

  functions: {
    balanceOf(tokenHolder: string): Promise<BigNumber>;

    isOperatorFor(operator: string, tokenHolder: string): Promise<boolean>;

    allowance(holder: string, spender: string): Promise<BigNumber>;

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

    burn(
      amount: BigNumberish,
      data: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    authorizeOperator(
      operator: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    revokeOperator(
      operator: string,
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

    operatorBurn(
      account: string,
      amount: BigNumberish,
      data: Arrayish,
      operatorData: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

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

    name(): Promise<string>;
    symbol(): Promise<string>;
    decimals(): Promise<number>;
    granularity(): Promise<BigNumber>;
    totalSupply(): Promise<BigNumber>;
    defaultOperators(): Promise<(string)[]>;
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
    send(
      recipient: string,
      amount: BigNumberish,
      data: Arrayish
    ): Promise<BigNumber>;

    transfer(recipient: string, amount: BigNumberish): Promise<BigNumber>;

    burn(amount: BigNumberish, data: Arrayish): Promise<BigNumber>;

    authorizeOperator(operator: string): Promise<BigNumber>;

    revokeOperator(operator: string): Promise<BigNumber>;

    operatorSend(
      sender: string,
      recipient: string,
      amount: BigNumberish,
      data: Arrayish,
      operatorData: Arrayish
    ): Promise<BigNumber>;

    operatorBurn(
      account: string,
      amount: BigNumberish,
      data: Arrayish,
      operatorData: Arrayish
    ): Promise<BigNumber>;

    approve(spender: string, value: BigNumberish): Promise<BigNumber>;

    transferFrom(
      holder: string,
      recipient: string,
      amount: BigNumberish
    ): Promise<BigNumber>;
  };
}
