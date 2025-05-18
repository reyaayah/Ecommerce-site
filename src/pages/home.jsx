import Button from "../components/button";

export default function Home() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-primary-dark mb-4">Welcome</h1>
            <Button onClick={() => alert('Button clicked!')}>Click Me</Button>
        </div>
    );
}
