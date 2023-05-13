import React from "react";
import { Link } from "gatsby";

export default function Media({ page }) {

    return (
        <Link to=".." className="return-to">Return to {page}</Link>
    );
}
