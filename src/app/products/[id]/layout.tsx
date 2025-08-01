import React from "react";

export default function ProductLayout ({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div>
            <div>{children}</div>
            <div>
                <h2>Featured products section ace rosillo</h2>
            </div>
        </div>
    )
}