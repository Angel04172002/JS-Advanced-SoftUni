        function fromJSONToHTMLTable(input) {
            
            let htmlResult = '<table>\n   <tr>';
            let parsedJson = JSON.parse(input);
            let keys = Object.keys(parsedJson[0]);
            
            keys.forEach(k => {
                htmlResult += `<th>${k}</th>`;
            });

            htmlResult += '</tr>\n';

            parsedJson.forEach(obj => {

                let values = Object.values(obj);
                htmlResult += '   <tr>';
                
                values.forEach(v => {
                    htmlResult += `<td>${v}</td>`;
                });

                htmlResult += '</tr>\n';
            });

            htmlResult += '</table>';
            console.log(htmlResult);
        }
