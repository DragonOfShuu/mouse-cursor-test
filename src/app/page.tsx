import MouseHoverDiv from "shuu/components/mouseHoverBox";

export default function Home() {
    const cursorTypes: Record<string, string> = {
        default: "Default",
        none: "None",
        "context-menu": "Context Menu",
        help: "Help",
        pointer: "Pointer",
        progress: "Progress",
        wait: "Wait",
        cell: "Cell",
        crosshair: "Crosshair",
        text: "Text",
        "vertical-text": "Vertical Text",
        alias: "Alias",
        copy: "Copy",
        move: "Move",
        "no-drop": "No Drop",
        "not-allowed": "Not Allowed",
        grab: "Grab",
        grabbing: "Grabbing",
        "e-resize": "E Resize",
        "n-resize": "N Resize",
        "ne-resize": "NE Resize",
        "nw-resize": "NW Resize",
        "s-resize": "S Resize",
        "se-resize": "SE Resize",
        "sw-resize": "SW Resize",
        "w-resize": "W Resize",
        "ew-resize": "EW Resize",
        "ns-resize": "NS Resize",
        "nesw-resize": "NESW Resize",
        "nwse-resize": "NWSE Resize",
        "col-resize": "Col Resize",
        "row-resize": "Row Resize",
        "all-scroll": "All Scroll",
        "zoom-in": "Zoom In",
        "zoom-out": "Zoom Out",
    };

    return (
        <main className="grid grid-cols-2 grid-flow-row gap-4">
            {Object.entries(cursorTypes).map(([property, displayName]) => (
                <MouseHoverDiv
                    key={property}
                    property={property}
                    displayName={displayName}
                />
            ))}
        </main>
    );
}
