import React from "react";

function BooksTableHeader(props) {
    return (
        <React.Fragment>
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">ISBN</th>
                    <th scope="col">Author</th>
                    <th scope="col">Publisher</th>
                    <th scope="col">Year Published</th>
                    <th scope="col">Category</th>
                    <th scope="col"></th>
                </tr>
            </thead>
        </React.Fragment>
    );
}

export default BooksTableHeader;