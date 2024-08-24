export default async function DynamicContent() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return <div>Dynamic Content</div>
}
