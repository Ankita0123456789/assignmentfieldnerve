export interface VendorFormIF {
    basicInfo: {
        vendor_name: string;
        vendor_code: string;
        vendor_category: string;
        gst_number: string;
        pan_number: string;
        payment_terms: string;
    },
    address: {
        street_address: string;
        city: string;
        state: string;
        country: string;
        pincode: string;
    }
    contactInfo: {
        contact_person_name: string
        designation: string;
        email: string;
        mobile_number: string;
        alternate_phone: string;
        company_website: string;
    },
    bankDetails: {
        bank_name: string;
        account_number: string;
        ifsc_code: string;
        account_type: string;
        branch_name: string;
    },
    certificationsCompliance: {
        iso_9001_2015: boolean;
        msme_registered: boolean;
        dpiit_startup_registration: boolean;
        gmp_certified: boolean;
    },
    documents: {
        pan_document: string;
        aadhaar_document: string;
        bank_statement: string;
        gst_certificate: string;
        certification_document: string;
    },
}

export interface FieldIF {
    name: string;
    label: string;
    placeholder?: string;
    type: string;
    required?: boolean;
    errorMessage?: string;
    options?: { label: string; value: string }[];
}