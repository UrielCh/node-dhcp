/**
 * @license DHCP.js v0.2.18 28/06/2017
 * http://www.xarg.org/2017/06/a-pure-javascript-dhcp-implementation/
 *
 * Copyright (c) 2017, Robert Eisele (robert@xarg.org)
 * Copyright (c) 2019, Uriel Chemouni (uchemouni@gmail.com)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 */

import { Client } from "./Client";
import { ClientConfig, IClientConfig } from "./ClientConfig";
import { Server } from "./Server";
import { IServerConfig, newServerConfig } from "./ServerConfig";
export { IClientConfig } from "./ClientConfig";
export { IServerConfig } from "./ServerConfig";
export { Client } from "./Client";
export { Server } from "./Server";
export { ILeaseLiveStore, LeaseLiveStoreFile, LeaseLiveStoreMemory, ILeaseLive } from "./leaseLive";
export { ILeaseStaticStore, LeaseStaticStoreFile, LeaseStaticStoreMemory, ILeaseEx, LeaseStaticStoreHelper, ILeaseExTxt } from "./leaseStatic";
export { ILeaseOfferStore, LeaseOfferStoreMemory } from "./leaseOffer";
export { OptionId, IDHCPMessage, IDHCPMessageTxt, IDHCPOptionsFncId } from "./model";
export { IOptionsTxtOrId, IOptionsTxt, IOptionsId } from "./model";
export { getDHCPName, getDHCPId } from "./options";
export { Helper } from "./Helper";
export { Tools } from "./tools";

export const createBroadcastHandler = (): Server => new Server(newServerConfig({ range: ["0.0.0.0", "0.0.0.1"] }), true);
export const createClient = (opt: IClientConfig): Client => new Client(new ClientConfig(opt));
export const createServer = (opt: IServerConfig): Server => new Server(newServerConfig(opt));

export default {
  createBroadcastHandler,
  createClient,
  createServer,
};
