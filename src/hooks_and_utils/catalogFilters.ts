interface Restoration {
    id: number;
    name: string;
    image: string | null;
    description: string;
    given_sum: number;
    total_sum: number
    works?: {
        id: number;
        name: string;
        given_sum: number;
        total_sum: number;
        percent: number;
    }[];
}


const catalogFilter = (softList: Restoration[], search: string) => {
    search = search.toLowerCase();
    let filtered: Restoration[] = [...softList].filter((elem) =>
        elem.name.toLowerCase().includes(search) ||
        elem.description.toLowerCase().includes(search) ||
        elem.total_sum.toString() === search ||
        (elem.works && elem.works.some((work) => work.name.toLowerCase().includes(search)))
    );
    return filtered;
};



export default catalogFilter;