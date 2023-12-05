import '../styles/gammaTables.css'

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
                    <td>Gamma Mean</td>
                    {gammaMean.map((item, index) => {
                        return <th key={index}>{Math.round(item*1000)/1000}</th>
                    })}
                </tr>
                <tr>
                    <td>Gamma Median</td>
                    {gammaMedian.map((item, index) => {
                        return <th key={index}>{Math.round(item*1000)/1000}</th>
                    })}
                </tr>
                <tr>
                    <td>Gamma Mode</td>
                    {gammaMode.map((item, index) => {
                        return <th key={index}>{Math.round(item*1000)/1000}</th>
                    })}
                </tr>
            </table>
        </div>
    </div>
  )
}
