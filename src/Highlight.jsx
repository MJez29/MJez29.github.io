import React from "react";
import "./Highlight.css";

export function comment(str) {
    return (
        <span className="comment">{str}</span>
    )
};

export function operator(str) {
    return (
        <span className="operator">{str}</span>
    )
}

export function object(str) {
    return (
        <span className="object">{str}</span>
    )
}

export function field(str) {
    return (
        <span className="field">{str}</span>
    )
}

export function string(str) {
    return (
        <span className="string">{str}</span>
    )
}

export function attr(str) {
    return (
        <span className="attr">{str}</span>
    )
}