import '../styles/meanTables.css'

export const MeanTable = ({categories, mean, median, mode}) => {
    return (
        <div>
            <table>
                <tr>
                    <th>Measure</th>
                    {categories.map((item, index) => {
                        return <th key={index}>Class {item}</th>
                    })}
                </tr>
                <tr>
                    <td>Flavanoids Mean</td>
                    {mean.map((item, index) => {
                        return <th key={index}>{Math.round(item*1000)/1000}</th>
                    })}
                </tr>
                <tr>
                    <td>Flavanoids Median</td>
                    {median.map((item, index) => {
                        return <th key={index}>{Math.round(item*1000)/1000}</th>
                    })}
                </tr>
                <tr>
                    <td>Flavanoids Mode</td>
                    {mode.map((item, index) => {
                        return <th key={index}>{item}</th>
                    })}
                </tr>
            </table>
        </div>
    )
}
