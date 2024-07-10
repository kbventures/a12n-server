import { User } from '../../types.js';

export type WebAuthnDevice = {
    id: number;
    user: User;
    credentialID: Uint8Array;
    publicKey: Uint8Array;
    counter: number;
}

export type NewWebAuthnDevice = Omit<WebAuthnDevice, 'id'>;
