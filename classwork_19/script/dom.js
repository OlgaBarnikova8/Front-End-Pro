export const createTd = (domNode) => {
    const td = document.createElement("td");
    td.append(domNode);
    return td;
}

export const createTdWithLink = (text, url) => {
    const link = document.createElement("a");
    link.href = url;
    link.innerHTML = text;

    const td = createTd(link);
    
    return td;
}
