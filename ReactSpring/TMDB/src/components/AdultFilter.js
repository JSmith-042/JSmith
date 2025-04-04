export const AdultFilter = [ "sex, boob, cum, blowjob, ass" ];

export function FilterAdultContent(content)
{
    console.log(content)

    content = content.map((row)=>{AdultFilter.forEach((filter)=>{if (row.overview.includes(filter)){
        console.log(filter)
        console.log(row); row = ""}
        console.log(row); return row})});

    console.log(content)
    return content;
}