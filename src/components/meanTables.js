import '../styles/tableStyles.css'

export const MeanTable = ({categories, mean, median, mode}) => {
    return (
        <div>
            <div>
                <table>
                    <tr>
                        <th>Measure</th>
                        {categories.map((item, index) => {
                            return <th key={index}>Class {item}</th>
                        })}
                    </tr>
                    <tr>
                        <th>Flavanoids Mean</th>
                        {mean.map((item, index) => {
                            return <td key={index}>{Math.round(item*1000)/1000}</td>
                        })}
                    </tr>
                    <tr>
                        <th>Flavanoids Median</th>
                        {median.map((item, index) => {
                            return <td key={index}>{Math.round(item*1000)/1000}</td>
                        })}
                    </tr>
                    <tr>
                        <th>Flavanoids Mode</th>
                        {mode.map((item, index) => {
                            return <td key={index}>{item}</td>
                        })}
                    </tr>
                </table>
            </div>
        </div>
    )
}
