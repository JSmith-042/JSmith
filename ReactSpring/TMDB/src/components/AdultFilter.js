export const AdultFilter = [ "sex", "boob", "cum", "blowjob", "ass", "breasts", "pleasuring", "penis" ];

export function FilterAdultContent(content)
{
    content = content.map((row,index)=>{AdultFilter.forEach((filter)=> {
        if (row.overview.toLowerCase().includes(filter) || row.title.toLowerCase().includes(filter)) {
            {
                console.log("inside filter: " + filter)
                console.log(row);
                row = {id: "blockxx" + index, title: "Blocked", overview: "Content Blocked by Adult Filter"}
            }
        }})
        return row;
    });

    return content;
}