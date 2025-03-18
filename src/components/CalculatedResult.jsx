export default function CalculatedResult({ result, formatter }) {
  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <td>Year</td>
            <td>Investment Value</td>
            <td>Interest(Year)</td>
            <td>Total Interest</td>
            <td>Invested Capital</td>
          </tr>
        </thead>
        <tbody>
          {result.map((rowData) => {
            return (
              <tr key={rowData.year}>
                <td>{rowData.year}</td>
                <td>{formatter.format(rowData.valueEndOfYear)}</td>
                <td>{formatter.format(rowData.interest)}</td>
                <td>{formatter.format(rowData.totalInterest)}</td>
                <td>{formatter.format(rowData.annualInvestment)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
