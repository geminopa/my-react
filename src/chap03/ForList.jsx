import React from 'react';

// 書籍情報はProps(src)経由で受け取る
export default function ForList({ src }) {
    return (
        <dl>
            {
                src.map(elem => (
                    <React.Fragment key={elem.isbn}>
                        <dt>
                            <a href={`https://wings.msn.to/books/${elem.isbn}/${elem.isbn}.jpg`}>
                                {elem.title} ({elem.price}円)
                            </a>
                        </dt>
                        <dd>{elem.summary}</dd>
                    </React.Fragment>
                ))
            }
        </dl>
    );
}