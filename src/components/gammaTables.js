import '../styles/tableStyles.css'

export const GammaTable = ({categories, gammaMean, gammaMode, gammaMedian}) => {
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
                    <th>Gamma Mean</th>
                    {gammaMean.map((item, index) => {
                        return <td key={index}>{Math.round(item*1000)/1000}</td>
                    })}
                </tr>
                <tr>
                    <th>Gamma Median</th>
                    {gammaMedian.map((item, index) => {
                        return <td key={index}>{Math.round(item*1000)/1000}</td>
                    })}
                </tr>
                <tr>
                    <th>Gamma Mode</th>
                    {gammaMode.map((item, index) => {
                        return <td key={index}>{Math.round(item*1000)/1000}</td>
                    })}
                </tr>
            </table>
        </div>
    </div>
  )
}
