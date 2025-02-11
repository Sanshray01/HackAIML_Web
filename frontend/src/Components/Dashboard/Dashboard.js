import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../Styles/Layout'
import Chart from './Chart'
import {dollar} from '../utils/icons'
import { useGlobalContext } from '../../Context/globalContext'
import History from './History'

function Dashboard() {
  const {totalExpense,totalIncome,totalBalance,getExpense,getIncome,incomes,expenses} = useGlobalContext()
  
  useEffect(() => {
    getIncome()
    getExpense()
  },[]
  )
  return (
    <DashboardStyled>
      <InnerLayout>
        <h1>Al Transactions</h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart/>
            <div className="amount-con">
              <div className="income">
                <h2>Total Income</h2>
                <p>
                  {dollar} {totalIncome()}
                </p>
              </div>
              <div className="expense">
                <h2>Total Expense</h2>
                <p>
                  {dollar} {totalExpense()}
                </p>
              </div>
              <div className="balance">
                <h2>Total Balance</h2>
                <p>
                  {dollar} {totalBalance()}
                </p>
              </div>
            </div>
          </div>
          <div className="history-con">
            <History/>
                <h2 className="salary-title">Min <span>Salary</span>Max</h2>
                <div className="salary-item">
                    <p>
                        ${Math.min(...incomes.map(item => item.amount))}
                    </p>
                    <p>
                        ${Math.max(...incomes.map(item => item.amount))}
                    </p>
                </div>
                <h2 className="salary-title">Min <span>Expense</span>Max</h2>
                <div className="salary-item">
                    <p>
                        ${Math.min(...expenses.map(item => item.amount))}
                    </p>
                    <p>
                        ${Math.max(...expenses.map(item => item.amount))}
                    </p>
                </div>
        </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  )
}

const DashboardStyled = styled.div`
.stats-con{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;
        .chart-con{
            grid-column: 1 / 4;
            height: 400px;
            .amount-con{
                display: grid;
                grid-template-columns: repeat(4, 1fr);
                gap: 2rem;
                margin-top: 2rem;
                .income, .expense{
                    grid-column: span 2;
                }
                .income, .expense, .balance{
                    background: #FCF6F9;
                    border: 2px solid #FFFFFF;
                    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                    border-radius: 20px;
                    padding: 1rem;
                    p{
                        font-size: 3.5rem;
                        font-weight: 700;
                    }
                }

                .balance{
                    grid-column: 2 / 4;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p{
                        color: var(--color-green);
                        opacity: 0.6;
                        font-size: 4.5rem;
                    }
                }
            }
        }

        .history-con{
            grid-column: 4 / -1;
            h2{
                margin: 1rem 0;
                display: flex;
                align-items: center;
                justify-content: space-between;
            }
            .salary-title{
                font-size: 1.2rem;
                span{
                    font-size: 1.8rem;
                }
            }
            .salary-item{
                background: #FCF6F9;
                border: 2px solid #FFFFFF;
                box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
                padding: 1rem;
                border-radius: 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                p{
                    font-weight: 600;
                    font-size: 1.6rem;
                }
            }
        }
        @media(max-width:512px){
          //border: 2px solid green;
          width:100%;
          height: 10%;
          font-size:30%;
          display: block;
          border-radius: 0 0px 0px 0;

        }
        @media(min-width:512px) and (max-width:1024px){
          //border: 2px solid green;
          width:100%;
          height: 10%;
          font-size:50%;
          display: block;
          border-radius: 0 0px 0px 0;
          chart{
            border: 2px solid blue;
          }
        }
    }
`

export default Dashboard
