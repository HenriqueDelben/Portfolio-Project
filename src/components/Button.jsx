import React from 'react';

export default function Button({ text, url }) {

    return (
        <div>
            <a href={url}>{text}</a>
        </div>
    );
} 