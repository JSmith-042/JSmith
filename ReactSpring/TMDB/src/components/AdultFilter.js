export function FilterAdultContent(contentArray)
{
    if (contentArray.length === 0)
        return

    const adultFilterArray = [ "sex", "boob", "cum", "blowjob", "ass", "breasts", "pleasuring", "penis", "porn", "gay", "lgbt", "lesbian", "homosexual", "l.g.b.t"];

    const filterContent = (contentArray) => {
        return contentArray.filter(content =>
            !(adultFilterArray.some(filterString => {
                return (content.overview === "" || (content.title.toLowerCase().includes(filterString)) || (content.overview.toLowerCase().includes(filterString)))
            }))
        );
    }

    return filterContent(contentArray);
}