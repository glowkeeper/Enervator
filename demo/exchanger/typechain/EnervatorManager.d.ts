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

interface EnervatorManagerInterface extends Interface {
  functions: {
    renounceOwnership: TypedFunctionDescription<{ encode([]: []): string }>;

    transferOwnership: TypedFunctionDescription<{
      encode([newOwner]: [string]): string;
    }>;

    setToken: TypedFunctionDescription<{ encode([_token]: [string]): string }>;

    addTokens: TypedFunctionDescription<{
      encode([_amount]: [BigNumberish]): string;
    }>;

    burnTokens: TypedFunctionDescription<{
      encode([_amount]: [BigNumberish]): string;
    }>;

    setTPES: TypedFunctionDescription<{
      encode([_amount]: [BigNumberish]): string;
    }>;

    setPerCapitaEnergy: TypedFunctionDescription<{
      encode([_amount]: [BigNumberish]): string;
    }>;

    send: TypedFunctionDescription<{
      encode([_recipient, _amount, _buyData]: [
        string,
        BigNumberish,
        Arrayish
      ]): string;
    }>;

    tokensReceived: TypedFunctionDescription<{
      encode([operator, from, to, amount, userData, operatorData]: [
        string,
        string,
        string,
        BigNumberish,
        Arrayish,
        Arrayish
      ]): string;
    }>;

    tokensToSend: TypedFunctionDescription<{
      encode([operator, from, to, amount, userData, operatorData]: [
        string,
        string,
        string,
        BigNumberish,
        Arrayish,
        Arrayish
      ]): string;
    }>;
  };

  events: {
    TPES: TypedEventDescription<{ encodeTopics([_amount]: [null]): string[] }>;

    PerCapitaEnergy: TypedEventDescription<{
      encodeTopics([_amount]: [null]): string[];
    }>;

    Minted: TypedEventDescription<{
      encodeTopics([_amount]: [null]): string[];
    }>;

    Burnt: TypedEventDescription<{ encodeTopics([_amount]: [null]): string[] }>;

    Sent: TypedEventDescription<{
      encodeTopics([_recipient, _amount, fromBalance, toBalance]: [
        null,
        null,
        null,
        null
      ]): string[];
    }>;

    TokensReceived: TypedEventDescription<{
      encodeTopics([operator, from, to, amount, fromBalance, toBalance]: [
        null,
        null,
        null,
        null,
        null,
        null
      ]): string[];
    }>;

    OwnershipTransferred: TypedEventDescription<{
      encodeTopics([previousOwner, newOwner]: [
        string | null,
        string | null
      ]): string[];
    }>;

    TokensReceived: TypedEventDescription<{
      encodeTopics([
        operator,
        from,
        to,
        amount,
        data,
        operatorData,
        token,
        fromBalance,
        toBalance
      ]: [null, null, null, null, null, null, null, null, null]): string[];
    }>;

    TokensSent: TypedEventDescription<{
      encodeTopics([
        operator,
        from,
        to,
        amount,
        data,
        operatorData,
        token,
        fromBalance,
        toBalance
      ]: [null, null, null, null, null, null, null, null, null]): string[];
    }>;
  };
}

export class EnervatorManager extends Contract {
  connect(signerOrProvider: Signer | Provider | string): EnervatorManager;
  attach(addressOrName: string): EnervatorManager;
  deployed(): Promise<EnervatorManager>;

  on(event: EventFilter | string, listener: Listener): EnervatorManager;
  once(event: EventFilter | string, listener: Listener): EnervatorManager;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): EnervatorManager;
  removeAllListeners(eventName: EventFilter | string): EnervatorManager;
  removeListener(eventName: any, listener: Listener): EnervatorManager;

  interface: EnervatorManagerInterface;

  functions: {
    renounceOwnership(
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setToken(
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    addTokens(
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    burnTokens(
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setTPES(
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    setPerCapitaEnergy(
      _amount: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    send(
      _recipient: string,
      _amount: BigNumberish,
      _buyData: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    tokensReceived(
      operator: string,
      from: string,
      to: string,
      amount: BigNumberish,
      userData: Arrayish,
      operatorData: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    tokensToSend(
      operator: string,
      from: string,
      to: string,
      amount: BigNumberish,
      userData: Arrayish,
      operatorData: Arrayish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    owner(): Promise<string>;
    isOwner(): Promise<boolean>;
    getTokenName(): Promise<string>;
    getTokenSymbol(): Promise<string>;
    getTotalSupply(): Promise<BigNumber>;
    getPricePerMWh(): Promise<BigNumber>;
    getCurrentTPES(): Promise<BigNumber>;
    getOldTPES(): Promise<BigNumber>;
    getPerCapitaEnergy(): Promise<BigNumber>;
    getUnitValue(): Promise<BigNumber>;
  };

  filters: {
    TPES(_amount: null): EventFilter;

    PerCapitaEnergy(_amount: null): EventFilter;

    Minted(_amount: null): EventFilter;

    Burnt(_amount: null): EventFilter;

    Sent(
      _recipient: null,
      _amount: null,
      fromBalance: null,
      toBalance: null
    ): EventFilter;

    TokensReceived(
      operator: null,
      from: null,
      to: null,
      amount: null,
      fromBalance: null,
      toBalance: null
    ): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    TokensReceived(
      operator: null,
      from: null,
      to: null,
      amount: null,
      data: null,
      operatorData: null,
      token: null,
      fromBalance: null,
      toBalance: null
    ): EventFilter;

    TokensSent(
      operator: null,
      from: null,
      to: null,
      amount: null,
      data: null,
      operatorData: null,
      token: null,
      fromBalance: null,
      toBalance: null
    ): EventFilter;
  };

  estimate: {
    renounceOwnership(): Promise<BigNumber>;

    transferOwnership(newOwner: string): Promise<BigNumber>;

    setToken(_token: string): Promise<BigNumber>;

    addTokens(_amount: BigNumberish): Promise<BigNumber>;

    burnTokens(_amount: BigNumberish): Promise<BigNumber>;

    setTPES(_amount: BigNumberish): Promise<BigNumber>;

    setPerCapitaEnergy(_amount: BigNumberish): Promise<BigNumber>;

    send(
      _recipient: string,
      _amount: BigNumberish,
      _buyData: Arrayish
    ): Promise<BigNumber>;

    tokensReceived(
      operator: string,
      from: string,
      to: string,
      amount: BigNumberish,
      userData: Arrayish,
      operatorData: Arrayish
    ): Promise<BigNumber>;

    tokensToSend(
      operator: string,
      from: string,
      to: string,
      amount: BigNumberish,
      userData: Arrayish,
      operatorData: Arrayish
    ): Promise<BigNumber>;
  };
}
