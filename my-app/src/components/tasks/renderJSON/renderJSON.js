import { characters } from "../../../mock_data/mock_data";

export default function RenderJSON () {
    const renderJSON = characters.map((item) => ({
        name : item.name,
        height : item.height
    }))

    return (
        <div>
            <h1>
                Render JSON data
            </h1>
            <pre>
                {JSON.stringify(renderJSON, null, 2)}
            </pre>
        </div>
    )
}