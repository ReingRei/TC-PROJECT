
export class WhatsappPayloadDto {
    messaging_product: string;
    metadata: {
        display_phone_number: string;
        phone_number_id: string
    };
    contacts: WhatsappContactDto[];
    messages: WhatsappMessageDto[];
}

export class WhatsappContactDto {
    profile: {
        name: string;
    };
    wa_id: string
}

export class WhatsappMessageDto {
    from: string;
    id: string;
    timestamp: string;
    text: {
        body: string
    };
    type: string;
}