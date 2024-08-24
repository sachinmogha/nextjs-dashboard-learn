//import StaticContent from "@/app/ui/customers/static-content";

import DynamicContent from "@/app/ui/customers/dynamic-content";
export const dynamic = 'force-dynamic'


//import DynamicContent from "@/app/ui/customers/dynamic-content";
export default function Page() {
    return <section>
        <h1 style={{ fontSize: '2em' }}>Customers page title</h1>
        {/* <StaticContent></StaticContent> */}

        <DynamicContent></DynamicContent>
    </section>;
}