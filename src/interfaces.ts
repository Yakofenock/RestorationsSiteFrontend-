

export interface WorkType {
    id: number;
    name: string;
    given_sum: number;
    total_sum: number;
    status: "NotStarted" | "InProcess" | "Completed"
}

export interface DonationType {
    id: number;
    name: string;
    works: {
        worl_id: number;
        work: string;
        given_sum: number;
        total_sum: number;
        percent: number;
    }[]
    given_sum: number;
    total_sum: number;
    percent: number;

}

export interface RestorationType {
    id: number;
    name: string;
    image: string | null;
    description: string;
    given_sum: number;
    total_sum: number
    works?: WorkType[];
    donaters?: DonationType[]
}


export interface PaymentType {
    id: number;
    user: number;
    manager: number;

    code: string;
    status: string;
    date_open: string;
    date_close: string;
    fate_pay: string;

    donations: DonationType[];
}