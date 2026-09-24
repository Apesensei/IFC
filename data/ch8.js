window.IFC = window.IFC || {};
window.IFC[8] = {
  n: 8,
  section: "Investment Funds in Canada · Section 3 · Chapter 8",
  shortTitle: "Constructing Portfolios",
  title: "Constructing Investment&nbsp;Portfolios",
  lede: "Seven objectives and the heaviest calculation load in the course. Five formulas you must be able to run, four risk measures, and one counterintuitive result the whole chapter is built to prove: a portfolio of bonds <em>and</em> stocks can be less risky than the bonds alone.",
  footer: "Distilled from <em>Investment Funds in Canada</em>, Section 3, Chapter 8 (CSI, 2024). Study aid only — not a substitute for the official text.",

  method: {
    title: "How to beat Chapter 8",
    sub: "Five formulas, then four risk measures",
    steps: [
      "<b>Learn the five formulas cold before touching anything else.</b> Single-security return, arithmetic mean, geometric mean, portfolio (weighted average) return, and real return. Every one appears as a worked example in the text, which is the strongest possible signal. Practise until you can set each one up from a bare word problem.",
      "<b>Know which mean to use and why.</b> The <b>arithmetic mean will ALWAYS be greater than the geometric mean</b> unless the sub-period returns are identical. The <b>geometric mean is the best measure of historical performance</b> because it measures the actual change in wealth. The whole Paul Parker case study exists to make that one point — expect it as a question.",
      "<b>Separate the four risk measures by what they apply to.</b> <b>Variance</b> and <b>standard deviation</b> — any security or portfolio. <b>Beta</b> — equities, measured against the market. <b>Duration</b> — bonds only, combining coupon and term into one number. Mixing up beta and duration is the classic error here.",
      "<b>Memorise the correlation endpoints and what each means for risk.</b> <b>+1</b> perfect positive: <b>no risk reduction at all</b>. <b>−1</b> perfect negative: <b>no variability, no risk</b> — the maximum gain from diversification, but very difficult to find in reality. Then the key limit: no matter how well diversified, <b>systematic (market) risk cannot be eliminated</b>.",
      "<b>Practise the standard deviation range trick.</b> Average return <b>plus</b> one standard deviation and <b>minus</b> one standard deviation gives the probable range. A 12% average with a 10% standard deviation gives 2% to 22%; with 4% it gives 8% to 16%. Same average, very different risk — that comparison is a ready-made exam question.",
      "<b>Do not confuse the three management concepts.</b> <b>Efficient markets</b> is the belief; <b>active vs. passive</b> is the response to that belief; <b>strategic asset allocation</b> is the base policy mix either style starts from. And remember the single biggest claim in the chapter: <b>asset allocation is the most important decision a portfolio manager makes</b>."
    ],
    flag: {
      label: "Where the marks actually are",
      text: "In rough order of exam weight: <b>the return calculations (especially arithmetic vs. geometric)</b>, <b>standard deviation and beta interpretation</b>, <b>correlation and what diversification can and cannot remove</b>, <b>duration</b>, and <b>the asset allocation decision</b>. Fundamental vs. technical analysis is a short section but produces an easy, reliable question."
    }
  },

  objectives: [
    {
      tag: "Objective 1",
      title: "Risk and return",
      blocks: [
        { points: [
          "<b>No perfect security exists that meets all the needs of all investors.</b> If one did, there would be no need for investment and portfolio management and no need to measure the return and risk of an investment.",
          "<b>Risk and return are interrelated.</b> To earn higher returns investors must usually choose investments with <b>higher risk</b>.",
          "Each investor has a different <b>risk profile</b> — not all investors choose the same low-risk security. Some are willing to take on more risk than others if they believe there is a higher potential for returns.",
          "Risk has several meanings: to some it is <b>losing money</b> on an investment; to others it is the prospect of <b>losing purchasing power</b> if the return does not keep up with inflation.",
          "Because all investors do not have the same risk profile, different securities and funds evolved to service each market niche: <b>GICs</b> for those seeking safety, <b>fixed-income funds</b> for those seeking income, and <b>equity funds</b> for those seeking growth or capital appreciation.",
          "<b>Returns are rarely guaranteed — that is why they are often called &ldquo;expected returns.&rdquo;</b> Returns can be reduced to some combination of <b>cash flows and capital gains or losses</b>."
        ]},
        { flag: {
          label: "The rational investor rule — stated twice in the chapter",
          text: "<b>Given a choice between two investments with the same amount of risk, a rational investor would always take the security with the HIGHER RETURN. Given two investments with the same expected return, the investor would always choose the security with the LOWER RISK.</b>"
        }},
        { table: {
          caption: "The expected return formula for a single security",
          head: ["Element", "Definition"],
          rows: [
            ["<b>Expected Return</b>", "<b>(Expected Cash Flow + Expected Capital Gain or Loss) ÷ Beginning Value</b>"],
            ["<b>Expected Cash Flow</b>", "Expected <b>dividends, interest, or any other type of income</b>"],
            ["<b>Expected Capital Gain/Loss</b>", "<b>Expected Ending Value − Beginning Value</b>"],
            ["<b>Beginning Value</b>", "The <b>initial dollar amount invested</b> by the investor"],
            ["<b>Expected Ending Value</b>", "The <b>expected dollar amount the investment is sold for</b>"]
          ]
        }},
        { points: [
          "<b>Volatility is the measure of risk investment professionals usually mean.</b> A hypothetical money market fund averaging <b>4.6%</b> a year over 15 years varies little from year to year — <b>stability is the opposite of volatility</b>. A hypothetical equity fund over the same period averaged <b>10.4%</b>, a higher average but <b>highly volatile</b> from year to year.",
          "<b>Year 3 of the equity fund returned 45%:</b> $10,000 + (0.45 × $10,000) = <b>$14,500</b>. <b>Year 6 lost 35%:</b> $10,000 − (0.35 × $10,000) = <b>$6,500</b>.",
          "<b>The three-year comparison (a short horizon):</b> $10,000 in the money market fund at 3.3%, 3.7% and 4.3% grows to <b>$11,172.84</b>. The same $10,000 in the equity fund at +20%, +30% and +35% grows to <b>$21,060</b>.",
          "<b>The six-year comparison (Years 10–15):</b> the money market fund grows to <b>$12,615.90</b>. The equity fund — despite losing <b>20% then 30%</b> in the first two years — recovers to <b>$13,562.64</b>, beating the money market fund. <b>Despite losing 36% of his original investment in the first three years, the investor improved his position a great deal by holding the riskier fund for a longer time.</b>",
          "<b>The fundamental issue: risky investments offer the hope of higher returns, but over short periods (or horizons) volatility can work for or against a client's interests.</b> Because equity funds are riskier than money market funds, the equity fund <b>should</b> do better over the longer term — <b>but not necessarily over the short term</b>."
        ]},
        { flag: {
          label: "The 50-year ranking of the three basic securities",
          text: "Over the last 50 years, <b>bonds have shown much greater return volatility than T-bills</b>, which means they have been a <b>riskier investment</b>. On average, however, <b>bond returns have been higher than T-bill returns</b>, compensating for that risk. <b>Equities are even more volatile than bonds</b>, and correspondingly the average return for equities is <b>higher than the average annual return on bonds</b>.<br><br>So: <b>T-bills are intrinsically the least risky, long-term bonds are riskier but historically have compensated investors for that additional risk, and equities are the riskiest and have also provided some risk compensation.</b> In all three, however, <b>expected returns and realized returns may not coincide</b>."
        }}
      ]
    },
    {
      tag: "Objective 2",
      title: "Inflation, purchasing power and taxation",
      blocks: [
        { points: [
          "<b>Inflation</b> is a <b>generalized, sustained trend of rising prices</b>. When prices are rising, <b>money begins to lose its value</b> — more and more money is needed to buy the same amount of goods and services.",
          "Inflation has averaged about <b>4.2% per year in Canada over the past 50 years</b>. However, it has not been much of a problem over the last two decades — <b>Canada's inflation rate has been less than 3% for much of the past twenty years</b>.",
          "Investors are more concerned with the <b>real rate of return</b> — the return <b>adjusted for the effects of inflation</b>. A <b>nominal return</b> is a return that has <b>not been adjusted</b> for the impact of inflation.",
          "<b>Real Return = Nominal Rate − Annual Inflation Rate.</b> Example: a client earned a nominal return of about <b>3%</b> on a T-bill when inflation was <b>2%</b> — a real return of about <b>1%</b>.",
          "<b>Purchasing power</b> is the <b>ability to buy goods and services</b>. An investment's purchasing power is maintained when <b>a dollar put aside in an earlier year can still buy the same amount of goods today</b> — that is, when the dollar grows at a rate <b>at least equal to the rate of inflation</b>. If inflation is 5% and your nominal return is 5%, <b>you will just maintain purchasing power</b>: adjusting that 5% nominal return for 5% inflation means a <b>real return of 0%</b> is needed to maintain purchasing power.",
          "<b>The difference between just keeping up with inflation and generating positive real returns represents an increase in the investor's wealth. Increasing wealth is the goal of investing, and that usually means accepting higher investment risk.</b>"
        ]},
        { table: {
          caption: "The three types of investment income and their tax treatment",
          head: ["Type", "Sources", "Tax treatment"],
          rows: [
            ["<b>Interest income</b>", "Treasury bills, bonds, money market mutual funds", "<b>The most highly taxed</b> — taxed at the <b>same rate as income from employment</b>"],
            ["<b>Dividend income</b>", "Common and preferred shares", "So long as it comes from <b>taxable Canadian corporations</b>, receives the benefit of the <b>dividend tax credit</b>, resulting in a <b>lower tax rate than on interest income</b>"],
            ["<b>Capital gains</b>", "Selling an investment for more than the price paid", "<b>Only 50% of capital gains are taxed at the ordinary income rate</b>"]
          ]
        }},
        { flag: {
          label: "The takeaway",
          text: "<b>You and your clients should always be concerned with AFTER-TAX returns.</b>"
        }}
      ]
    },
    {
      tag: "Objective 3",
      title: "Calculating returns",
      blocks: [
        { points: [
          "Returns can be measured in <b>absolute dollars</b> — made $100 or lost $20 — but <b>absolute numbers obscure their significance</b>. Was the $100 gain made on an investment of <b>$1,000 or $100,000</b>? In the first case it may be significant; in the latter it could signal a poor investment choice.",
          "The more common practice is to express returns as a <b>percentage or rate of return or yield</b>. To convert a dollar amount to a percentage, <b>divide the total dollar returns by the amount invested</b>.",
          "If the transaction period were <b>longer or shorter than a year</b>, the return would be called the <b>holding period return</b>."
        ]},
        { table: {
          caption: "Rate of return on a single security",
          head: ["Formula", "Worked examples"],
          rows: [
            ["<b>Return % = [Cash Flow + (Ending Value − Beginning Value)] ÷ Beginning Value × 100</b>", "<b>1.</b> Bought at $10, sold a year later at $12, no cash flow:<br>[0 + ($12 − $10)] ÷ $10 × 100 = <b>20%</b><br><br><b>2.</b> Bought at $20, sold at $22, received $1 in dividends:<br>[$1 + ($22 − $20)] ÷ $20 × 100 = <b>15%</b><br><br><b>3.</b> Bought at $10, received $2 in dividends, sold for only $9:<br>[$2 + ($9 − $10)] ÷ $10 × 100 = <b>10%</b>"]
          ]
        }},
        { table: {
          caption: "The two mean returns — know when each is used",
          head: ["Measure", "Formula and what it does"],
          rows: [
            ["<b>Arithmetic mean return (AMR)</b>", "<b>AMR = (R₁ + R₂ + … + R_T) ÷ T</b><br>Simply the <b>sum of the individual holding period returns divided by the number of holding period returns</b>. Easy to calculate — for a five-year mean, add the fund's annual returns for the last five years and divide by 5."],
            ["<b>Geometric mean return (GMR)</b>", "<b>GMR = [(1 + R₁) × (1 + R₂) × … × (1 + R_T)]^(1/T) − 1</b><br>Calculates the <b>average COMPOUND return over several time periods</b>. Used to determine the <b>periodic increase or decrease in wealth</b> from an investment."]
          ]
        }},
        { table: {
          caption: "Table 8.7 worked — two funds, five years",
          head: ["Year", "Trinity Cdn Equity", "Alpha Cdn Equity"],
          rows: [
            ["1", "49.36%", "18.01%"],
            ["2", "15.67%", "15.15%"],
            ["3", "−7.17%", "4.83%"],
            ["4", "−8.78%", "−3.68%"],
            ["5", "26.51%", "17.93%"],
            ["<b>Arithmetic mean</b>", "75.59 ÷ 5 = <b>15.12%</b>", "<b>10.45%</b>"],
            ["<b>Geometric mean</b>", "1.850795^0.2 − 1 = <b>13.10%</b>", "1.618114^0.2 − 1 = <b>10.10%</b>"]
          ]
        }},
        { flag: {
          label: "A typo in the textbook's own arithmetic — know both numbers",
          text: "The text shows the Alpha fund's five returns summing to <b>52.54</b>, then divides by 5 to get <b>10.448 → 10.45%</b>. <b>Add the five returns yourself and they total 52.24</b> (18.01 + 15.15 + 4.83 − 3.68 + 17.93). And <b>52.24 ÷ 5 = 10.448</b>, which matches the printed answer — while 52.54 ÷ 5 would be 10.508.<br><br>So the <b>final answer of 10.45% is correct</b>; only the <b>intermediate sum is a transcription error</b>. If a question asks for the mean, answer <b>10.45%</b>. If it asks you to add the returns, trust your own arithmetic."
        }},
        { flag: {
          label: "The rule that carries the most marks in this section",
          text: "<b>The arithmetic mean will ALWAYS be greater than the geometric mean, unless the sub-period returns are identical</b> — in which case the two are the same. If a security returned exactly 5% every year for five years, both means equal <b>5%</b>.<br><br><b>In general, the more volatile the sub-period returns, the greater the difference between the arithmetic and geometric means.</b> And <b>the geometric mean is the best measure of the historical performance of a security, because it measures the actual change in wealth</b> that would have resulted. $1,000 in the Trinity fund would have averaged <b>13.10%</b> per year, growing to roughly <b>$1,850.60</b> over the five-year period."
        }},
        { table: {
          caption: "The Paul Parker case study — why the difference matters",
          head: ["Step", "Detail"],
          rows: [
            ["<b>The investment</b>", "<b>$20,000</b> into the XYZ U.S. Large Cap Equity Fund <b>five years ago</b>"],
            ["<b>The five annual returns</b>", "<b>−23%, −9%, +7%, +18%, +31%</b>"],
            ["<b>What Paul calculated</b>", "The <b>arithmetic mean</b>: (−23 − 9 + 7 + 18 + 31) ÷ 5 = <b>4.8%</b> per year"],
            ["<b>What the statement showed</b>", "The <b>geometric mean</b>: [(0.77)(0.91)(1.07)(1.18)(1.31)]^(1/5) − 1 = 1.15896^(1/5) − 1 = <b>2.99%</b>"],
            ["<b>The actual end value</b>", "<b>$23,179.24</b> after five years — reached identically whether you compound the five actual returns or apply the geometric mean of 2.994454% five times"],
            ["<b>The lesson</b>", "<b>Straight arithmetic mean returns will always be higher than the realized average return.</b> Historical returns are <b>best calculated using the geometric mean</b>, which <b>shows the accurate measure of historical performance</b>."]
          ]
        }},
        { table: {
          caption: "Rate of return on a portfolio",
          head: ["Formula", "Worked example"],
          rows: [
            ["<b>Expected Return = R₁(W₁) + R₂(W₂) + … + R_n(W_n)</b><br><br><b>R</b> = the expected return on a particular security<br><b>W</b> = the <b>proportion (weight)</b> of that security in the portfolio, based on the dollar investment<br><b>n</b> = the number of securities in the portfolio<br><br>That is, the <b>weighted average return</b> on the securities held.", "A client invests <b>$100</b>: <b>$60 in ABC Co.</b> and <b>$40 in DEF Co.</b> ABC is expected to return <b>15%</b>, DEF <b>12%</b>.<br>ABC is <b>60%</b> of the portfolio ($60 ÷ $100), DEF is <b>40%</b>.<br>(0.15 × 0.60) + (0.12 × 0.40)<br>= 0.09 + 0.048<br>= <b>0.138, or 13.8%</b><br><br><b>This is a good example of how mutual funds calculate the return on their funds.</b>"]
          ]
        }}
      ]
    },
    {
      tag: "Objective 4",
      title: "Measuring risk",
      blocks: [
        { points: [
          "Although there are many types of risk, <b>risk generally is synonymous with volatility</b> — the idea that <b>the return on an investment may be unpredictable</b>: high during one period and low during another.",
          "<b>Every investor's dream is to be able to get a high return without incurring any risk. The reality, however, is that risk and return are directly related.</b>"
        ]},
        { table: {
          caption: "The three common measures of EQUITY price volatility",
          head: ["Measure", "Definition and use"],
          rows: [
            ["<b>Variance</b>", "Measures the extent to which the <b>possible realized returns differ from the expected return or the mean</b>. <b>The more likely it is that the return will NOT be the same as the expected return, the riskier the security.</b> When an investor purchases a <b>T-bill the return is predictable</b> — it cannot change as long as the investor holds it to maturity. With equities the outcomes are more varied: the price could increase, stay the same or decrease. <b>The greater the number of possible outcomes, the greater the risk that the outcome will not be favourable.</b> The greater the estimated distance between the expected return and the possible returns, <b>the greater the variance</b>."],
            ["<b>Standard deviation</b>", "<b>The measure of risk commonly applied to portfolios and to individual securities within that portfolio. Standard deviation is the SQUARE ROOT of the variance.</b> Past performance or historical returns are used to determine a <b>range of possible future outcomes</b>. <b>The more volatile the price of a security has been in the past, the larger the range of possible future outcomes.</b> Expressed as a <b>percentage</b>. <b>The greater the standard deviation, the larger the likely range of possible future outcomes, and therefore the greater the risk.</b>"],
            ["<b>Beta</b>", "A statistical measure that <b>links the risk of individual equity securities or a portfolio of equities to the market as a whole</b>. <b>The risk that remains after diversifying is market risk.</b> Beta measures <b>the degree to which individual equity securities or a portfolio tend to move up and down with the market</b>. <b>A higher beta means the portfolio is exposed to more risk.</b> The general convention is that <b>the market has a beta of 1.0</b>, and all portfolios can be viewed in terms of how volatile they are in relation to a market beta of 1.0. <b>The higher the beta, the greater the risk.</b>"]
          ]
        }},
        { flag: {
          label: "The standard deviation comparison — a ready-made exam question",
          text: "Two funds both average <b>12%</b> over five years. <b>ABC Equity</b> has a standard deviation of <b>10%</b>; <b>DEF Equity</b> has <b>4%</b>.<br><br><b>Average Return + Standard deviation = positive outcome. Average Return − Standard deviation = negative outcome.</b><br><br>ABC's probable range is <b>2% to 22%</b> (12 − 10 and 12 + 10). DEF's is <b>8% to 16%</b>. <b>DEF has a narrower probable range of returns, so DEF is less risky than ABC</b> — even though both reported the same average return. In any given year the fund with the <b>higher standard deviation could fluctuate much more widely</b>, making it less attractive as an investment <b>even over the long term</b>."
        }},
        { table: {
          caption: "Reading beta",
          head: ["Beta", "Meaning and example"],
          rows: [
            ["<b>1.0</b>", "Moves up or down <b>to the same degree as the stock market</b>. If the S&amp;P/TSX Composite rose 10%, the fund could be expected to advance <b>10%</b>; if the Index fell 5%, the fund would fall <b>5%</b>."],
            ["<b>Greater than 1.0</b>", "Moves <b>more than the market</b>. A fund with a beta of <b>1.5</b> is expected to be <b>1.5 times more volatile than the market</b>: if the Index rose 10% the fund would rise <b>15%</b>; if the Index fell 20% the fund should fall <b>30%</b>. A beta of <b>1.30</b> would rise <b>13%</b> when the Index rose 10%."],
            ["<b>Less than 1.0</b>", "Moves <b>less than the market</b>. A portfolio with a beta of <b>0.80</b> would be expected to rise only <b>8%</b> when the Index rose 10%."],
            ["<b>Industry patterns</b>", "Most portfolio betas indicate a <b>positive correlation</b> between equities and the stock market. Industries with <b>volatile earnings — typically cyclical industries — tend to have higher betas than the market</b>. <b>Defensive industries tend to have betas less than 1</b>, implying that when the market is falling, <b>defensive stocks would normally fall relatively less and cyclical stocks relatively more</b>."]
          ]
        }},
        { flag: {
          label: "The beta caution the text adds",
          text: "Simplistically, it could be stated that <b>in a rising market it is better to have high beta stocks and in a falling market it is better to have defensive, low beta stocks</b>. <b>However, this is an over-generalization and presumes that history repeats itself.</b>"
        }},
        { table: {
          caption: "Measuring BOND price volatility — duration",
          head: ["Concept", "Detail"],
          rows: [
            ["<b>The three relationships already known</b>", "<b>1.</b> The value of a bond changes in the <b>opposite direction</b> to changes in interest rates. <b>2.</b> For two bonds with the <b>same term and same yield</b>, the bond with the <b>higher coupon</b> is usually <b>less volatile</b>. <b>3.</b> For two bonds with the <b>same coupon and same yield</b>, the bond with the <b>longer term</b> is usually <b>more volatile</b>."],
            ["<b>The problem</b>", "It is easy to compare bonds with the <b>same</b> term or the <b>same</b> coupon — but how do you compare a bond with a <b>high coupon and a long term</b> against one with a <b>lower coupon and a shorter term</b>?"],
            ["<b>Duration</b>", "<b>A measure of the sensitivity of a bond's price to changes in interest rates — defined as the approximate percentage change in the price or value of a bond for a 1% change in interest rates.</b> It <b>combines both the impact of the coupon rate and the term to maturity into one calculation</b>. <b>The higher the duration, the more the bond will react to a change in interest rates.</b> A single duration figure for each bond or bond fund can be <b>compared directly with the duration of every other bond or bond fund</b>."],
            ["<b>Worked example</b>", "A bond with a duration of <b>10</b> priced at <b>105</b>: if rates rise 1%, the price falls approximately <b>10%</b> to <b>94.50</b> — calculated as 105 − (10% × 105). Duration is not limited to 1% changes: for a <b>50-basis-point (0.5%)</b> change the approximate price change is <b>5%</b> (10 × 0.5); for a <b>0.25%</b> change it is <b>2.5%</b> (10 × 0.25)."],
            ["<b>Strategy</b>", "Since higher duration means a higher percentage price change for a given yield change, an investor will realize the <b>greatest return from an expected DECLINE in interest rates by investing in bonds with HIGHER duration</b>. Conversely, <b>to protect a bond portfolio from a dramatic decline due to an interest rate INCREASE, investors should invest in bonds with LOW duration</b>."],
            ["<b>In practice</b>", "Calculation of duration is complicated and a bond's duration <b>can change over longer holding periods and larger interest rate swings</b>, so the text does not show the calculation. <b>The duration of bond funds is generally provided by the mutual fund itself</b> and is an <b>important measure of volatility that must be taken into consideration when recommending a bond fund for clients</b>."]
          ]
        }},
        { table: {
          caption: "Table 8.8 — the same 1% change, two durations",
          head: ["", "Bond A (duration 10)", "Bond B (duration 5)"],
          rows: [
            ["Both priced at", "$1,000", "$1,000"],
            ["<b>Rates rise 1%</b>", "falls 10% → <b>$900</b>", "falls 5% → <b>$950</b>"],
            ["<b>Rates fall 1%</b>", "rises 10% → <b>$1,100</b>", "rises 5% → <b>$1,050</b>"]
          ]
        }},
        { flag: {
          label: "Figure 8.3 — the risk/return ladder, low to high",
          text: "<b>Treasury Bills → Bonds → Debentures → Preferred Shares → Common Shares → Derivatives.</b> Expected return rises with risk along that line."
        }}
      ]
    },
    {
      tag: "Objective 5",
      title: "Portfolio analysis, diversification and correlation",
      blocks: [
        { points: [
          "An <b>investment portfolio</b>, such as a mutual fund, is simply a <b>collection of different securities</b>. They may be of the same class, or of many different classes including bonds, stocks and money market securities. Some portfolios even include derivatives. <b>The fundamental characteristic of an investment portfolio is that it is a diversified collection of securities.</b>",
          "<b>Diversification</b> refers to the <b>spreading of investment risk by buying different types of securities in different companies in different kinds of businesses and/or locations</b>. <b>Overall, the greater the diversification, the lower the portfolio risk.</b>",
          "<b>The critically important result this chapter exists to prove:</b> although bond investments are considered less risky than common stock investments, <b>a portfolio combining both bonds and common stocks CAN BE LESS RISKY than the bond investments alone</b>. This is <b>more than just the idea that you can reduce risk by not having &ldquo;all of your eggs in one basket.&rdquo;</b>",
          "<b>No matter how well diversified a portfolio is, there will always remain some amount of risk that cannot be removed.</b> The risk that <b>cannot be eliminated or reduced by diversification</b> is called <b>market risk, or systematic risk</b>.",
          "<b>Market risk</b> is defined as the <b>variability of a stock or a portfolio in relation to the market as a whole</b>. The process of diversification <b>cancels out much firm-specific risk</b>, so market risk is <b>less than the total risk</b> you would calculate looking at each stock separately. It <b>arises from such things as inflation, the business cycle, and interest rates</b>.",
          "Another reason for diversifying is that <b>different classes of securities, such as bonds and stocks, tend to exhibit different patterns of returns</b>. <b>Combining any two securities may not diversify the portfolio if the risk characteristics of the two securities are extremely similar.</b>"
        ]},
        { table: {
          caption: "Correlation — the concept that makes diversification work",
          head: ["Concept", "Detail"],
          rows: [
            ["<b>Definition</b>", "The <b>statistical measure of how the returns on two securities move together over time</b> — and therefore how a change to the value of one security can predict the change in value of another. From a portfolio perspective we are interested in <b>how securities relate to each other when added to a portfolio, and how the resulting combination affects the portfolio's total risk and return</b>."],
            ["<b>Perfect positive correlation (+1)</b>", "The gold-mining example: an investor puts 100% of savings into a gold mining stock, then &ldquo;diversifies&rdquo; into <b>another gold mining company</b>. The portfolio has <b>not been adequately diversified</b> — the securities are linked, their value tied to the fortunes of gold. If two stock prices <b>move in the same direction and in the same proportion each time</b>, they have <b>perfect positive correlation, denoted +1</b>. <b>The investor does NOT reduce risk by adding securities that are perfectly correlated with each other. Holding securities with perfect positive correlation does not reduce the overall risk of the portfolio.</b>"],
            ["<b>Perfect negative correlation (−1)</b>", "The airline and bus company example: in good times people fly, in bad times they save money by taking the bus. In good times the airline shares rise; in bad times the airline stock declines <b>but the loss is offset by an increase in the price of bus company shares</b>. Since the prices move in <b>opposite directions and in the same proportion each time</b>, the investor earns a <b>positive return with little risk</b> — these have <b>perfect negative correlation, denoted −1</b>. <b>With perfect negative correlation there is no variability in the total returns for the two assets — thus no risk for the portfolio. The maximum gain from diversification is achieved when securities exhibit perfect negative correlation. In reality, however, it is very difficult to find securities with such a high level of negative correlation.</b>"],
            ["<b>Poorly correlated securities</b>", "Research shows that <b>adding poorly correlated securities to a portfolio does in fact reduce risk</b>. However, <b>each additional security reduces risk at a lower rate</b>. Since the securities are still <b>positively correlated to some degree</b>, the equity portfolio is left with <b>one risk that cannot be eliminated — systematic or market risk</b>."]
          ]
        }},
        { flag: {
          label: "Figure 8.4 — what the diversification curve shows",
          text: "<b>The total risk of the portfolio falls quite significantly as the first few stocks are added.</b> As the number of stocks increases, <b>the additional reduction in risk declines</b>. <b>Finally, a point is reached where a further reduction in risk through diversification cannot be achieved.</b> Therefore, <b>the main source of uncertainty for an investor with a diversified portfolio is the impact of SYSTEMATIC RISK on portfolio return.</b>"
        }},
        { points: [
          "<b>Portfolio beta:</b> the beta or <b>beta coefficient</b> relates the <b>volatility of a single equity or equity portfolio to the volatility of the stock market as a whole</b>. Specifically, beta measures <b>that part of the fluctuation in returns driven by changes in the stock market</b>. <b>The wider the range in market returns, the greater the volatility and the greater the risk.</b>",
          "<b>Portfolio alpha:</b> quite often equity portfolios <b>outperform the market and move more than would be expected from their beta</b>. The additional movement is due to the <b>advisor's or fund manager's skill in picking those securities that will outperform</b>. This is known as <b>alpha — the excess return earned on the portfolio</b>."
        ]}
      ]
    },
    {
      tag: "Objective 6",
      title: "Efficient markets, management styles and asset allocation",
      blocks: [
        { points: [
          "The initial construction of a portfolio is the first step. The manager must then decide what changes to make — <b>what individual securities to sell and buy, what sector weightings to use, and the asset allocation, based on changes in the economy</b>. <b>Portfolio managers</b> engage in this activity day-to-day using knowledge of the financial marketplace and personal management style.",
          "<b>The difference between the two management styles is really a question of whether the portfolio manager believes that the financial marketplace is EFFICIENT.</b> If markets are <b>efficient</b>, the prices of stocks and other securities <b>reflect all the information that exists about them</b> — if you buy those securities, <b>the best return you can hope for is compensation for risk</b>. If markets are <b>less than efficient</b>, some prices will <b>not completely reflect all information</b>: you might have favourable information the market has not yet received or digested, letting you buy at the current price, wait for the market to catch on and bid up the price, and then sell for an <b>excess return</b>.",
          "To beat the market this way you would need some <b>advantage other investors do not have</b> — for example being <b>unusually skillful at identifying undervalued securities</b>. Alternatively, you could have a friend in high places who provides <b>inside information of material significance that has not yet been made public</b>. <b>However, this constitutes illegal insider trading and will expose you to legal action.</b>",
          "<b>Undervalued stocks offer the possibility of excess returns: returns above those needed to compensate for risk.</b>"
        ]},
        { table: {
          caption: "Active versus passive management",
          head: ["Style", "Belief and method"],
          rows: [
            ["<b>Active portfolio management</b>", "<b>If markets were completely efficient there would be no justification for active management.</b> Active management involves <b>seeking out information to find securities that are under- or over-valued</b>. Active managers try to <b>outperform the market benchmarks by changing the portfolio asset allocation</b>, often using a strategy called <b>market timing</b>."],
            ["<b>Market timing</b>", "The manager tries to <b>time the shift from one class of security to another</b> depending on anticipated changes in the <b>economy, the business cycle, industries and companies</b>. It is the <b>basic strategy of some balanced mutual funds</b>. <b>In theory, market timing is easy. In practice, however, timers often change their asset allocation either too early or too late.</b>"],
            ["<b>Passive portfolio management</b>", "If the manager believes markets are <b>completely efficient</b>, they would simply <b>invest in a stock market (or bond market) index</b>. The portfolio manager <b>does not try to earn excess returns</b>. Passive managers simply <b>buy and hold an underlying stock or bond index</b>."]
          ]
        }},
        { flag: {
          label: "The single most important claim in the chapter",
          text: "Portfolio investment objectives must eventually be translated into a specific selection of individual securities — <b>but this is not the most important decision made by the portfolio manager</b>.<br><br><b>The single most important decision, one that accounts for most of the success or failure of a portfolio, is the ASSET ALLOCATION decision — the selection of the classes of securities to be held and in what proportion to hold them.</b><br><br>Example: the manager of the XYZ Growth Fund decides that an asset mix of <b>5% cash, 10% high-yield bonds and 85% equities</b> is the optimal mix."
        }},
        { points: [
          "For professionally managed portfolios such as pension funds and mutual funds, <b>investment objectives are often stated in terms of the types of return the portfolio should generate</b>. One might aim for <b>current income only</b>; another for a mixture of <b>capital gains, interest income and dividend income</b>. Investors must take <b>greater risks to earn capital gains than dividend income, and more risk to earn dividend income than interest income</b> — so <b>stating the types of return the portfolio should earn is really a statement about the RISK LEVEL of the portfolio</b>.",
          "<b>The next most important decision</b> is the selection of the specific industries from which stocks will be selected: the portfolio's <b>sector weighting</b>. For example, the <b>S&amp;P/TSX Composite Index includes 11 industry sectors</b> — energy, financials, technology, health care, materials, utilities and telecommunications among others.",
          "<b>Strategic asset allocation:</b> when a portfolio manager develops a strategy to maximize returns, he or she does so with a particular <b>asset mix</b> in mind — for example 60% equities and 40% bonds, or 10% cash, 40% bonds and 50% equities. <b>This base policy mix is called the strategic asset allocation. It is the long-term mix that will be adhered to by monitoring and, when necessary, rebalancing.</b>",
          "To find this base policy mix, the manager <b>analyzes a variety of asset mixes to determine the optimal portfolio</b>, reviews the <b>range of outcomes</b>, and chooses one to determine the long-term policy.",
          "<b>Strategic asset allocation is the basis of most in-house &ldquo;model portfolios&rdquo;</b> suggested by investment managers. Once the manager determines the optimal weighting of the combination of all the funds it offers, <b>you need only determine the client's ability to bear investment risk</b> — combining those two efforts gives you the best possible asset allocation to recommend."
        ]},
        { flag: {
          label: "When a client rejects the recommended allocation",
          text: "A client may reject the strategic asset allocation in favour of one they determined themselves. <b>If the &ldquo;know your client&rdquo; data and the client's request show an acceptable fit, you can process the request</b> — while <b>indicating to the client that your financial institution does not recommend the requested asset allocation</b>. <b>If the fit is not right, however, then you may NOT process the request.</b>"
        }}
      ]
    },
    {
      tag: "Objective 7",
      title: "Fundamental and technical analysis",
      blocks: [
        { points: [
          "<b>Security analysis</b> is the <b>evaluation of the risk and return characteristics of securities</b>. Almost all investors, individual and professional, do some type of analysis before making a purchase or sale. <b>For individual investors, time often limits the depth of analysis and the process tends to be informal. For professional investors, their careers depend upon their ability to do good security analysis.</b>",
          "<b>The two basic types of security analysis are fundamental analysis and technical analysis.</b> Both are in widespread use, and <b>each approach offers very different views of how the financial system operates</b>."
        ]},
        { table: {
          caption: "The two schools of analysis",
          head: ["", "Fundamental analysis", "Technical analysis"],
          rows: [
            ["<b>What it studies</b>", "Assessing the <b>short-, medium- and long-range prospects of different industries and companies</b>. Studying <b>capital market conditions and the outlook for the national economy</b> and for the economies of countries Canada trades with. In fact it means <b>studying everything OTHER THAN the trading on the securities markets</b> that can affect a security's value: macroeconomic factors, industry conditions, individual company financial conditions, and qualitative factors such as <b>management performance</b>.", "The study of <b>historical stock prices and stock market behaviour to identify recurring patterns in the data</b>. Technical analysts study <b>price movements, trading volumes, and data on the number of rising and falling stock issues over time</b>, looking for patterns that will let them <b>predict future stock price movements</b>."],
            ["<b>The core belief</b>", "<b>By far the most important single factor affecting the price of a corporate security is the actual or expected PROFITABILITY of the issuer.</b> Are its profits sufficient to service its debt, pay current dividends, or pay larger dividends?", "By studying the <b>&ldquo;price action&rdquo; of the market</b> they gain <b>better insights into the emotions and psychology of investors</b>. They contend that <b>because most investors fail to learn from their mistakes, identifiable patterns exist</b>."],
            ["<b>What it examines</b>", "A company's <b>debt-equity ratio, profit margins, dividend payout, earnings per share</b>; <b>interest and asset coverage ratios</b>; and <b>sales penetration, market share, product or marketing innovation, and the quality of its management</b>.", "Because the process requires <b>large amounts of information</b>, it is <b>often ignored by fundamental analysts</b>, who find it too <b>cumbersome and time consuming</b>, or who believe that <b>&ldquo;history does not repeat itself.&rdquo;</b>"]
          ]
        }},
        { flag: {
          label: "What makes the technical analyst's job harder",
          text: "In times of uncertainty, other factors such as <b>mass investor psychology</b> and the influence of <b>program trading</b> (sophisticated computerized trading strategies) also affect market prices. <b>Mass investor psychology may cause investors to act irrationally. Greed can force prices to rise to a level far higher than warranted by anticipated earnings. Conversely, uncertainty can also cause investors to overreact to news and sell quickly, causing prices to drop suddenly.</b>"
        }}
      ]
    }
  ],

  numbers: [
    ["4.6% / 10.4%", "Average annual return of the hypothetical <b>money market</b> and <b>equity</b> funds over 15 years"],
    ["$14,500", "$10,000 after a <b>+45%</b> year"],
    ["$6,500", "$10,000 after a <b>−35%</b> year"],
    ["$11,172.84", "Money market fund, 3 years at 3.3% / 3.7% / 4.3%"],
    ["$21,060", "Equity fund, 3 years at +20% / +30% / +35%"],
    ["$12,615.90", "Money market fund, Years 10–15"],
    ["$13,562.64", "Equity fund, Years 10–15 — <b>beats</b> the money market fund despite −20% then −30%"],
    ["36%", "How much of the original investment was lost in the first three years of that six-year window"],
    ["4.2%", "Average Canadian inflation per year over the past <b>50 years</b>"],
    ["&lt;3%", "Canada's inflation rate for much of the past <b>twenty</b> years"],
    ["3% − 2% = 1%", "Nominal return less inflation = <b>real</b> return"],
    ["0%", "The real return needed to <b>just maintain purchasing power</b>"],
    ["50%", "Portion of a <b>capital gain</b> taxed at the ordinary income rate"],
    ["20% / 15% / 10%", "The three single-security rate of return worked examples"],
    ["15.12% / 13.10%", "Trinity fund — <b>arithmetic</b> and <b>geometric</b> mean"],
    ["10.45% / 10.10%", "Alpha fund — <b>arithmetic</b> and <b>geometric</b> mean"],
    ["75.59", "Sum of Trinity's five returns (Alpha's sum is <b>52.24</b>; the text misprints it as 52.54)"],
    ["$1,850.60", "What $1,000 in the Trinity fund grows to over five years at 13.10%"],
    ["4.8% / 2.99%", "Paul Parker's <b>arithmetic</b> vs. <b>geometric</b> mean"],
    ["$20,000 → $23,179.24", "Paul's actual five-year result"],
    ["13.8%", "Portfolio return: (0.15 × 0.60) + (0.12 × 0.40)"],
    ["2% – 22%", "ABC Equity probable range: 12% average ± <b>10%</b> standard deviation"],
    ["8% – 16%", "DEF Equity probable range: 12% average ± <b>4%</b> standard deviation"],
    ["1.0", "The <b>market</b> beta by convention"],
    ["1.5 × 10% = 15%", "Beta 1.5 when the Index rises 10% (and <b>−30%</b> when it falls 20%)"],
    ["1.30 / 0.80", "Betas producing <b>13%</b> and <b>8%</b> when the Index rises 10%"],
    ["+1 / −1", "<b>Perfect positive</b> and <b>perfect negative</b> correlation"],
    ["Duration 10", "A <b>10%</b> price change for a 1% rate change — e.g. 105 → <b>94.50</b>"],
    ["10 × 0.5 = 5%", "Duration 10 applied to a <b>50-basis-point</b> change (0.25% → <b>2.5%</b>)"],
    ["$900 / $950", "Bond A (duration 10) and Bond B (duration 5) after rates rise 1% from $1,000"],
    ["11", "Industry sectors in the <b>S&amp;P/TSX Composite Index</b>"],
    ["5 / 10 / 85", "The XYZ Growth Fund asset mix example: cash / high-yield bonds / equities"]
  ],

  traps: [
    ["Arithmetic mean", "Sum of returns ÷ number of periods. <b>ALWAYS greater</b> than the geometric mean unless sub-period returns are identical.", "Geometric mean", "The average <b>COMPOUND</b> return. <b>The best measure of historical performance</b> — it measures the actual change in wealth."],
    ["Variance", "How far possible realized returns <b>differ from the expected return</b>.", "Standard deviation", "<b>The SQUARE ROOT of the variance.</b> Expressed as a <b>percentage</b>; gives the probable <b>range</b> of outcomes."],
    ["Beta", "<b>EQUITIES.</b> Links a security or portfolio's volatility to <b>the market as a whole</b>. Market = <b>1.0</b>.", "Duration", "<b>BONDS.</b> Approximate <b>% price change for a 1% change in interest rates</b>. Combines coupon <b>and</b> term."],
    ["Perfect positive correlation (+1)", "Prices move <b>same direction, same proportion</b>. <b>Does NOT reduce portfolio risk at all.</b>", "Perfect negative correlation (−1)", "Prices move <b>opposite directions, same proportion</b>. <b>No variability, no risk</b> — the <b>maximum</b> gain from diversification, but very hard to find."],
    ["Firm-specific risk", "<b>CAN</b> be cancelled out by diversification.", "Market / systematic risk", "<b>CANNOT</b> be eliminated or reduced by diversification. Arises from <b>inflation, the business cycle and interest rates</b>."],
    ["Beta", "Measures the fluctuation driven by <b>changes in the stock market</b>.", "Alpha", "The <b>EXCESS return</b> earned on the portfolio — attributed to the manager's <b>skill in picking securities</b>."],
    ["Active management", "Believes markets are <b>less than efficient</b>. Seeks under/over-valued securities; changes allocation, often via <b>market timing</b>.", "Passive management", "Believes markets are <b>completely efficient</b>. Simply <b>buys and holds an index</b>; does not try to earn excess returns."],
    ["Asset allocation", "The <b>selection of the CLASSES of securities</b> to hold and in what proportion. <b>The single most important decision.</b>", "Sector weighting", "The <b>next</b> most important decision — which <b>industries</b> stocks are selected from."],
    ["Strategic asset allocation", "The <b>base policy mix</b> — the <b>long-term</b> mix adhered to by monitoring and <b>rebalancing</b>.", "Market timing", "An <b>active</b> strategy shifting between security classes on anticipated changes. <b>Easy in theory; timers are often too early or too late.</b>"],
    ["Fundamental analysis", "Everything <b>OTHER THAN</b> trading on the markets: economy, industry, company financials, <b>management quality</b>. Key factor = <b>profitability</b>.", "Technical analysis", "<b>Historical stock prices and market behaviour</b> — price movements, volumes, advancing/declining issues — looking for <b>recurring patterns</b>."],
    ["Nominal return", "<b>NOT adjusted</b> for inflation.", "Real rate of return", "<b>Nominal rate − annual inflation rate.</b> What determines <b>purchasing power</b>."],
    ["Interest income", "<b>The most highly taxed</b> — same rate as employment income.", "Capital gains", "<b>Only 50%</b> taxed at the ordinary rate. Dividends from taxable Canadian corporations get the <b>dividend tax credit</b>."],
    ["Same risk, different return", "A rational investor takes the <b>HIGHER return</b>.", "Same return, different risk", "A rational investor takes the <b>LOWER risk</b>."],
    ["Higher duration", "Best for an expected <b>DECLINE</b> in rates — biggest gain.", "Lower duration", "Best to <b>protect</b> a portfolio from an expected <b>INCREASE</b> in rates."]
  ],

  cards: [
    ["State the rational investor rule in both directions.", "<b>Given a choice between two investments with the same amount of risk, a rational investor would always take the security with the HIGHER RETURN. Given two investments with the same expected return, the investor would always choose the security with the LOWER RISK.</b>"],
    ["Give the expected return formula for a single security and define its terms.", "<b>Expected Return = (Expected Cash Flow + Expected Capital Gain or Loss) ÷ Beginning Value</b><ul><li><b>Expected Cash Flow</b> — expected dividends, interest or any other income</li><li><b>Expected Capital Gain/Loss</b> — expected ending value minus beginning value</li><li><b>Beginning Value</b> — the initial dollar amount invested</li><li><b>Expected Ending Value</b> — the expected dollar amount the investment is sold for</li></ul>"],
    ["Why are returns often called &ldquo;expected returns&rdquo;?", "Because <b>returns are rarely guaranteed</b>. While an investment may be purchased in anticipation of a rise in value, <b>the reality is that values can decline</b> — a decline is referred to as a <b>capital loss</b>. Returns reduce to some combination of <b>cash flows and capital gains or losses</b>."],
    ["What does a $10,000 investment become after a +45% year and after a −35% year?", "<b>+45%:</b> $10,000 + (0.45 × $10,000) = <b>$14,500</b>. <b>−35%:</b> $10,000 − (0.35 × $10,000) = <b>$6,500</b>."],
    ["What does the six-year money market versus equity comparison demonstrate?", "Over Years 10–15 the money market fund grew to <b>$12,615.90</b> while the equity fund — despite losing <b>20% then 30%</b> in the first two years — reached <b>$13,562.64</b>. Despite losing <b>36% of his original investment in the first three years</b>, the investor <b>improved his position a great deal by holding the riskier fund for a longer time</b>."],
    ["Rank T-bills, long-term bonds and equities by risk and by historical compensation.", "<b>T-bills are intrinsically the least risky</b>; <b>long-term bonds are riskier but historically have compensated investors for that additional risk</b>; <b>equities are the riskiest and have also provided some risk compensation</b>. In all three, <b>expected returns and realized returns may not coincide</b>."],
    ["Define inflation and give Canada's long-run average.", "A <b>generalized, sustained trend of rising prices</b>. When prices rise, <b>money begins to lose its value</b> — more money is needed to buy the same goods and services. Inflation has averaged about <b>4.2% per year in Canada over the past 50 years</b>, though it has been <b>less than 3% for much of the past twenty years</b>."],
    ["Distinguish nominal return from real rate of return and give the formula.", "A <b>nominal return</b> has <b>not been adjusted for the impact of inflation</b>. The <b>real rate of return</b> is the return <b>adjusted for the effects of inflation</b>. <b>Real Return = Nominal Rate − Annual Inflation Rate.</b> Example: a 3% nominal T-bill return with 2% inflation gives a <b>1%</b> real return."],
    ["Define purchasing power and state what real return maintains it.", "<b>The ability to buy goods and services.</b> An investment's purchasing power is maintained when a dollar put aside in an earlier year <b>can still buy the same amount of goods today</b> — that is, when the dollar grows at a rate <b>at least equal to the rate of inflation</b>. A <b>real return of 0%</b> is what is needed to just maintain purchasing power."],
    ["Why is a 0% real return not enough?", "Because <b>the difference between just keeping up with inflation and generating positive real returns represents an increase in the investor's wealth. Increasing wealth is the goal of investing, and that usually means accepting higher investment risk.</b>"],
    ["Name the three types of investment income and rank them by tax burden.", "<b>Interest income</b> (T-bills, bonds, money market funds) is <b>the most highly taxed</b> — at the same rate as employment income. <b>Dividend income</b> (common and preferred shares) from taxable Canadian corporations gets the <b>dividend tax credit</b>, giving a <b>lower rate than interest</b>. <b>Capital gains</b> — <b>only 50% is taxed</b> at the ordinary income rate."],
    ["Why are absolute dollar returns misleading?", "Because <b>absolute numbers obscure their significance</b>. A $100 gain on an investment of <b>$1,000</b> may be significant, while the same $100 on <b>$100,000</b> could signal a poor investment choice. The common practice is to express returns as a <b>percentage or rate of return or yield</b>."],
    ["Give the single-security rate of return formula and run all three examples.", "<b>Return % = [Cash Flow + (Ending Value − Beginning Value)] ÷ Beginning Value × 100</b><ul><li>Bought $10, sold $12, no cash flow → <b>20%</b></li><li>Bought $20, sold $22, $1 dividend → <b>15%</b></li><li>Bought $10, $2 dividend, sold $9 → <b>10%</b></li></ul>"],
    ["What is a holding period return?", "The return when the <b>transaction period is longer or shorter than a year</b>. All the standard examples are set for one year, so their percent return can also be called the <b>annual rate of return</b>."],
    ["Give the arithmetic mean return formula.", "<b>AMR = (R₁ + R₂ + … + R_T) ÷ T</b> — the <b>sum of the individual holding period returns divided by the number of holding period returns</b>. For a five-year mean, add the fund's annual returns for the last five years and divide by 5."],
    ["Give the geometric mean return formula and say what it calculates.", "<b>GMR = [(1 + R₁) × (1 + R₂) × … × (1 + R_T)]^(1/T) − 1</b>. It calculates the <b>average COMPOUND return over several time periods</b> and is used to determine the <b>periodic increase or decrease in wealth</b> from an investment."],
    ["State the relationship between the arithmetic and geometric means.", "<b>The arithmetic mean will ALWAYS be greater than the geometric mean, unless the sub-period returns are identical</b> — in which case they are the same. If a security returned 5% every year for five years, both means equal <b>5%</b>. <b>In general, the more volatile the sub-period returns, the greater the difference between the two.</b>"],
    ["Which mean is the best measure of historical performance, and why?", "<b>The geometric mean</b>, because it <b>measures the actual change in wealth that would have resulted from an investment in that security</b>. $1,000 in the Trinity fund at a geometric mean of <b>13.10%</b> grows to about <b>$1,850.60</b> over five years."],
    ["Give the Trinity and Alpha means from Table 8.7.", "<b>Trinity:</b> arithmetic <b>15.12%</b> (75.59 ÷ 5), geometric <b>13.10%</b>. <b>Alpha:</b> arithmetic <b>10.45%</b>, geometric <b>10.10%</b>. (Note the text misprints Alpha's sum as 52.54; the five returns actually total <b>52.24</b>, which is what produces 10.448.)"],
    ["Run the Paul Parker case study.", "<b>$20,000</b> invested five years ago; annual returns <b>−23%, −9%, +7%, +18%, +31%</b>. Paul used the <b>arithmetic mean</b>: (−23 − 9 + 7 + 18 + 31) ÷ 5 = <b>4.8%</b>. The statement used the <b>geometric mean</b>: [(0.77)(0.91)(1.07)(1.18)(1.31)]^(1/5) − 1 = <b>2.99%</b>. The fund's end value was <b>$23,179.24</b>. <b>Straight arithmetic mean returns will always be higher than the realized average return.</b>"],
    ["Give the portfolio return formula and run the ABC/DEF example.", "<b>Expected Return = R₁(W₁) + R₂(W₂) + … + R_n(W_n)</b> — the <b>weighted average return</b> on the securities held, where W is the proportion based on the dollar investment.<br>$60 in ABC (15% expected) and $40 in DEF (12% expected) on $100 total → ABC is <b>60%</b>, DEF is <b>40%</b>:<br>(0.15 × 0.60) + (0.12 × 0.40) = 0.09 + 0.048 = <b>13.8%</b>. <b>This is how mutual funds calculate the return on their funds.</b>"],
    ["What is risk generally synonymous with?", "<b>Volatility</b> — the idea that <b>the return on an investment may be unpredictable</b>, high during one period and low during another. <b>Every investor's dream is a high return without risk; the reality is that risk and return are directly related.</b>"],
    ["Define variance.", "It measures the extent to which the <b>possible realized returns differ from the expected return or the mean</b>. <b>The more likely it is that the return will not be the same as the expected return, the riskier the security.</b> The greater the number of possible outcomes, the greater the risk the outcome will not be favourable; <b>the greater the estimated distance between the expected return and the possible returns, the greater the variance</b>."],
    ["Define standard deviation and state its relationship to variance.", "<b>The measure of risk commonly applied to portfolios and to individual securities within a portfolio. Standard deviation is the SQUARE ROOT of the variance.</b> Past performance is used to determine a <b>range of possible future outcomes</b> — <b>the more volatile the price has been in the past, the larger the range</b>. Expressed as a <b>percentage</b>: <b>the greater the standard deviation, the greater the risk</b>."],
    ["How do you find a fund's probable range of returns? Run the ABC/DEF comparison.", "<b>Average Return + Standard deviation = positive outcome; Average Return − Standard deviation = negative outcome.</b> Both funds average <b>12%</b>. ABC has a standard deviation of <b>10%</b> → range <b>2% to 22%</b>. DEF has <b>4%</b> → range <b>8% to 16%</b>. <b>DEF has a narrower probable range, so DEF is less risky.</b>"],
    ["Define beta and state the market convention.", "A statistical measure that <b>links the risk of individual equity securities or a portfolio of equities to the market as a whole</b>. It measures <b>the degree to which they tend to move up and down with the market</b>. <b>The general convention is that the market has a beta of 1.0</b>, and <b>the higher the beta, the greater the risk</b>."],
    ["Work three beta examples against a 10% Index rise.", "<b>Beta 1.0</b> → the fund advances <b>10%</b>. <b>Beta 1.30</b> → rises <b>13%</b> (1.3 × 10%). <b>Beta 0.80</b> → rises only <b>8%</b>. A fund with <b>beta 1.5</b> rises <b>15%</b> on a 10% Index rise and falls <b>30%</b> if the Index falls 20%."],
    ["How do cyclical and defensive industries differ in beta?", "Industries with <b>volatile earnings — typically cyclical industries — tend to have higher betas than the market</b>. <b>Defensive industries tend to have betas less than 1</b>, implying that when the market falls, <b>defensive stocks normally fall relatively less and cyclical stocks relatively more</b>. But the text warns this is <b>an over-generalization that presumes history repeats itself</b>."],
    ["State the three bond volatility relationships duration is designed to combine.", "<ul><li>A bond's value changes in the <b>opposite direction</b> to interest rates</li><li>Same term and yield → the <b>higher coupon</b> bond is usually <b>less</b> volatile</li><li>Same coupon and yield → the <b>longer term</b> bond is usually <b>more</b> volatile</li></ul>Duration is needed because comparing a <b>high-coupon long-term</b> bond with a <b>low-coupon short-term</b> bond requires one combined number."],
    ["Define duration.", "<b>A measure of the sensitivity of a bond's price to changes in interest rates — the approximate percentage change in the price or value of a bond for a 1% change in interest rates.</b> It combines <b>both the coupon rate and the term to maturity into one calculation</b>. <b>The higher the duration, the more the bond will react to a change in interest rates.</b>"],
    ["A bond with a duration of 10 is priced at 105. Rates rise 1%. What happens?", "The price falls approximately <b>10%</b>, to <b>94.50</b> — calculated as 105 − (10% × 105). Duration is not limited to 1% changes: a <b>0.5%</b> change gives about <b>5%</b> (10 × 0.5) and a <b>0.25%</b> change about <b>2.5%</b>."],
    ["How should duration guide bond strategy?", "An investor realizes the <b>greatest return from an expected DECLINE in interest rates by investing in bonds with HIGHER duration</b>. To <b>protect a bond portfolio from a dramatic decline due to an interest rate INCREASE, invest in bonds with LOW duration</b>."],
    ["Who provides duration in practice, and why does it matter?", "<b>The duration of bond funds is generally provided by the mutual fund itself</b>, because the calculation is complicated and duration <b>can change over longer holding periods and larger interest rate swings</b>. It is an <b>important measure of volatility that must be taken into consideration when recommending a bond fund for clients</b>."],
    ["Give the risk/return ladder from Figure 8.3.", "Lowest to highest: <b>Treasury Bills → Bonds → Debentures → Preferred Shares → Common Shares → Derivatives</b>."],
    ["Define diversification and its relationship to risk.", "The <b>spreading of investment risk by buying different types of securities in different companies in different kinds of businesses and/or locations</b>. Portfolios have different degrees of diversification based on the <b>number of securities, the types of security, and the industries or countries</b> they come from. <b>Overall, the greater the diversification, the lower the portfolio risk.</b>"],
    ["What is the counterintuitive result this chapter sets out to prove?", "Although <b>bond investments are considered less risky than common stock investments, a portfolio combining BOTH bonds and common stocks can be LESS risky than the bond investments alone</b>. This is <b>more than just the idea that you reduce risk by not having &ldquo;all of your eggs in one basket.&rdquo;</b>"],
    ["Define market risk and name its sources.", "Also called <b>systematic risk</b> — <b>the risk that cannot be eliminated or reduced by diversification</b>. It is the <b>variability of a stock or a portfolio in relation to the market as a whole</b>. Diversification <b>cancels out much firm-specific risk</b>, so market risk is <b>less than the total risk</b> of each stock separately. It <b>arises from such things as inflation, the business cycle, and interest rates</b>."],
    ["Define correlation.", "The <b>statistical measure of how the returns on two securities move together over time</b>, and therefore how a change in the value of one security can predict the change in value of another. From a portfolio perspective we care <b>how securities relate to each other when added to a portfolio and how the combination affects total risk and return</b>."],
    ["Explain perfect positive correlation using the gold example.", "An investor with 100% in a gold mining stock &ldquo;diversifies&rdquo; into <b>another gold mining company</b> — but the portfolio has <b>not been adequately diversified</b>, because both values are tied to the fortunes of gold. If two stock prices <b>move in the same direction and in the same proportion each time</b>, they have <b>perfect positive correlation, denoted +1</b>. <b>Holding securities with perfect positive correlation does NOT reduce the overall risk of the portfolio.</b>"],
    ["Explain perfect negative correlation using the airline/bus example.", "In good times people fly; in bad times they take the bus. In bad times the airline stock declines <b>but the loss is offset by an increase in bus company shares</b>. Since prices move in <b>opposite directions and in the same proportion each time</b>, the investor earns a <b>positive return with little risk</b> — <b>perfect negative correlation, denoted −1</b>. <b>There is no variability in total returns and thus no risk for the portfolio.</b>"],
    ["Where is the maximum gain from diversification achieved — and what is the catch?", "<b>The maximum gain is achieved when securities held within the portfolio exhibit perfect negative correlation.</b> <b>In reality, however, it is very difficult to find securities with such a high level of negative correlation.</b>"],
    ["What happens as you add poorly correlated securities to a portfolio?", "<b>Adding poorly correlated securities does in fact reduce risk — but each additional security reduces risk at a LOWER rate.</b> Since the securities remain <b>positively correlated to some degree</b>, the portfolio is left with <b>one risk that cannot be eliminated: systematic or market risk</b>."],
    ["Describe what Figure 8.4 shows.", "<b>The total risk of the portfolio falls quite significantly as the first few stocks are added.</b> As the number increases, <b>the additional reduction in risk declines</b>, until <b>a point is reached where further reduction through diversification cannot be achieved</b>. Therefore the <b>main source of uncertainty for an investor with a diversified portfolio is the impact of systematic risk on portfolio return</b>."],
    ["Define portfolio alpha.", "Quite often equity portfolios <b>outperform the market and move more than would be expected from their beta</b>. That additional movement is due to the <b>advisor's or fund manager's skill in picking securities that will outperform</b> — this is <b>alpha, the excess return earned on the portfolio</b>."],
    ["What does it mean for a market to be efficient?", "If markets are <b>efficient</b>, the <b>prices of stocks and other securities reflect all the information that exists about them</b>. If you buy those securities, <b>the best return you can hope for is compensation for risk</b>. If markets are <b>less than efficient</b>, some prices will not completely reflect all information — creating the possibility of <b>excess returns</b>."],
    ["What advantage would you need to beat the market, and what is the illegal version?", "Some type of advantage other investors do not have — for example being <b>unusually skillful at identifying undervalued securities</b>. Alternatively, having a friend in high places providing <b>inside information of material significance that has not yet been made public</b> — but <b>this constitutes illegal insider trading and will expose you to legal action</b>."],
    ["Contrast active and passive portfolio management.", "<b>Active</b> management involves <b>seeking out information to find securities that are under- or over-valued</b>, trying to <b>outperform market benchmarks by changing the portfolio asset allocation</b>, often via <b>market timing</b>. <b>If markets were completely efficient there would be no justification for active management.</b> <b>Passive</b> managers believe markets are completely efficient and simply <b>buy and hold an underlying stock or bond index</b>, not trying to earn excess returns."],
    ["Define market timing and state its practical problem.", "The manager tries to <b>time the shift from one class of security to another</b> depending on anticipated changes in the <b>economy, the business cycle, industries and companies</b>. It is the <b>basic strategy of some balanced mutual funds</b>. <b>In theory market timing is easy. In practice, timers often change their asset allocation either too early or too late.</b>"],
    ["What is the single most important decision a portfolio manager makes?", "<b>The ASSET ALLOCATION decision — the selection of the classes of securities to be held and in what proportion to hold them.</b> It <b>accounts for most of the success or failure of a portfolio</b>. Selecting individual securities is <b>not</b> the most important decision."],
    ["Why is stating a portfolio's target return types really a statement about risk?", "Because investors <b>must take greater risks to earn capital gains than dividend income, and more risk to earn dividend income than interest income</b>. So stating the types of return the portfolio should earn is <b>really a statement about the risk level of the portfolio</b>."],
    ["What is sector weighting? Give the index example.", "<b>The next most important decision after asset allocation</b> — the selection of the <b>specific industries from which stocks will be selected</b>. The <b>S&amp;P/TSX Composite Index includes 11 industry sectors</b>, among them energy, financials, technology, health care, materials, utilities and telecommunications."],
    ["Define strategic asset allocation.", "The <b>base policy mix</b> a manager develops with a particular asset mix in mind — for example 60% equities and 40% bonds. <b>It is the long-term mix that will be adhered to by monitoring and, when necessary, rebalancing.</b> To find it, the manager <b>analyzes a variety of asset mixes to determine the optimal portfolio</b> and reviews the range of outcomes."],
    ["How does strategic asset allocation help you as a representative?", "It is the <b>basis of most in-house &ldquo;model portfolios&rdquo;</b> suggested by investment managers. Once the manager determines the <b>optimal weighting of the combination of all the funds offered</b>, you need only determine the <b>client's ability to bear investment risk</b> — combining the two gives the best possible allocation to recommend."],
    ["A client rejects the recommended strategic asset allocation. What can you do?", "<b>If the &ldquo;know your client&rdquo; data and the client's request show an acceptable fit, you can process the request</b> — while <b>indicating to the client that your financial institution does not recommend the requested asset allocation</b>. <b>If the fit is not right, however, you may NOT process the request.</b>"],
    ["Define security analysis and name its two basic types.", "<b>The evaluation of the risk and return characteristics of securities.</b> The two basic types are <b>fundamental analysis</b> and <b>technical analysis</b>. Both are in widespread use, and <b>each offers very different views of how the financial system operates</b>."],
    ["Define fundamental analysis and name the most important single factor.", "Assessing the <b>short-, medium- and long-range prospects of different industries and companies</b>, studying capital market conditions and the economic outlook. It means <b>studying everything OTHER THAN the trading on the securities markets</b> that can affect a security's value. <b>By far the most important single factor affecting the price of a corporate security is the actual or expected PROFITABILITY of the issuer.</b>"],
    ["What specific items does fundamental analysis examine?", "<ul><li><b>Debt-equity ratio, profit margins, dividend payout, earnings per share</b></li><li><b>Interest and asset coverage ratios</b></li><li><b>Sales penetration, market share, product or marketing innovation, and the quality of management</b></li></ul>"],
    ["Define technical analysis and state its core belief.", "The <b>study of historical stock prices and stock market behaviour to identify recurring patterns in the data</b>. Analysts study <b>price movements, trading volumes, and data on rising and falling stock issues over time</b>. They believe that by studying the <b>&ldquo;price action&rdquo; of the market</b> they gain <b>better insights into the emotions and psychology of investors</b>, and contend that <b>because most investors fail to learn from their mistakes, identifiable patterns exist</b>."],
    ["Why do fundamental analysts often ignore technical analysis?", "Because the process <b>requires large amounts of information</b>, so they find it <b>too cumbersome and time consuming</b>, or they believe that <b>&ldquo;history does not repeat itself.&rdquo;</b>"],
    ["What two forces make the technical analyst's job harder?", "<b>Mass investor psychology</b> and the influence of <b>program trading</b> (sophisticated computerized trading strategies). <b>Mass investor psychology may cause investors to act irrationally: greed can force prices far higher than warranted by anticipated earnings, and uncertainty can cause investors to overreact to news and sell quickly, causing prices to drop suddenly.</b>"]
  ],

  quiz: [
    ["Given two investments with the same expected return, a rational investor would choose:", ["The one with the higher risk", "Either, since returns are equal", "The one with the longer track record", "The one with the lower risk"], 3, "Given two investments with the same expected return, the investor would always choose the security with the lower risk. Given the same risk, they would always take the higher return."],
    ["An investor buys a stock for $20, receives $1 in dividends, and sells it a year later for $22. The rate of return is:", ["10%", "20%", "15%", "5%"], 2, "Return % = [Cash Flow + (Ending Value − Beginning Value)] ÷ Beginning Value × 100 = [$1 + ($22 − $20)] ÷ $20 × 100 = 15%."],
    ["An investor buys a stock for $10, receives $2 in dividends, but sells it for only $9. The rate of return is:", ["−10%", "0%", "20%", "10%"], 3, "[$2 + ($9 − $10)] ÷ $10 × 100 = $1 ÷ $10 × 100 = 10%. The $2 dividend more than offsets the $1 capital loss."],
    ["The arithmetic mean return will always be ___ the geometric mean return, unless sub-period returns are identical.", ["Greater than", "Lower than", "Equal to", "Unrelated to"], 0, "The arithmetic mean will always be greater than the geometric mean unless the sub-period returns are identical, in which case they are the same. The more volatile the sub-period returns, the greater the difference."],
    ["Which mean is the best measure of a security's historical performance?", ["The arithmetic mean", "The median return", "The geometric mean", "The highest annual return"], 2, "The geometric mean is the best measure of historical performance because it measures the actual change in wealth that would have resulted from an investment in that security."],
    ["Paul's fund returned −23%, −9%, +7%, +18% and +31% over five years. His arithmetic mean was 4.8%, but his statement showed:", ["4.8%", "2.99%", "6.2%", "0.0%"], 1, "The geometric mean was [(0.77)(0.91)(1.07)(1.18)(1.31)]^(1/5) − 1 = 2.99%. His $20,000 grew to $23,179.24. Straight arithmetic mean returns will always be higher than the realized average return."],
    ["A client invests $60 in ABC (expected return 15%) and $40 in DEF (expected return 12%). The portfolio's expected return is:", ["13.5%", "13.8%", "14.0%", "12.0%"], 1, "The portfolio return is the weighted average: (0.15 × 0.60) + (0.12 × 0.40) = 0.09 + 0.048 = 0.138, or 13.8%."],
    ["A client earns a 3% nominal return when inflation is 2%. The real return is approximately:", ["5%", "3%", "1%", "0%"], 2, "Real Return = Nominal Rate − Annual Inflation Rate = 3% − 2% = 1%."],
    ["What real rate of return is needed to just maintain purchasing power?", ["2%", "0%", "4.2%", "It depends on the tax rate"], 1, "Purchasing power is maintained when your dollar grows at a rate at least equal to inflation. If inflation is 5% and your nominal return is 5%, the real return is 0% — which is exactly what maintains purchasing power."],
    ["Which type of investment income is the most highly taxed?", ["Interest income", "Capital gains", "Dividend income from Canadian corporations", "All three are taxed identically"], 0, "Interest income is the most highly taxed because it is taxed at the same rate as income from employment. Dividends from taxable Canadian corporations receive the dividend tax credit, and only 50% of capital gains are taxed."],
    ["Standard deviation is best described as:", ["The square of the variance", "The average of the returns", "The same thing as beta", "The square root of the variance"], 3, "Standard deviation is the square root of the variance. It is the measure of risk commonly applied to portfolios and to individual securities within a portfolio, and is expressed as a percentage."],
    ["A fund has an average return of 12% and a standard deviation of 10%. Its probable range of returns is:", ["10% to 12%", "2% to 22%", "8% to 16%", "−10% to 12%"], 1, "Average Return + Standard deviation gives the positive outcome and Average Return − Standard deviation the negative: 12% + 10% = 22% and 12% − 10% = 2%."],
    ["Two funds both average 12%. ABC has a standard deviation of 10%, DEF of 4%. Which is less risky and why?", ["ABC, because it has more upside", "DEF, because it has a narrower probable range of returns", "They are equally risky since averages match", "ABC, because higher deviation means higher return"], 1, "DEF has a narrower probable range (8% to 16% versus 2% to 22%), so DEF is considered less risky despite both funds reporting the same average return."],
    ["By general convention, the market has a beta of:", ["0", "0.5", "1.0", "1.5"], 2, "The general convention is that the market has a beta of 1.0. All portfolios can be viewed in terms of how volatile they are in relation to a market beta of 1.0, and the higher the beta, the greater the risk."],
    ["An equity fund with a beta of 1.5 is expected to do what if the Index falls 20%?", ["Fall 20%", "Fall 30%", "Fall 13%", "Fall 10%"], 1, "A beta of 1.5 means the fund is expected to be 1.5 times more volatile than the market: 1.5 × 20% = 30%."],
    ["Defensive industries typically have betas:", ["Greater than 1", "Negative", "Exactly 1", "Less than 1"], 3, "Defensive industries tend to have betas less than the market, that is, less than 1. This implies that when the market is falling, defensive stocks would normally fall relatively less and cyclical stocks relatively more."],
    ["Duration measures the approximate percentage change in a bond's price for:", ["A 1% change in interest rates", "A 1% change in the bond's coupon", "A 1% change in the issuer's earnings", "A one-year change in term"], 0, "Duration is a measure of the sensitivity of a bond's price to changes in interest rates — the approximate percentage change in price for a 1% change in interest rates. It combines both the coupon rate and the term to maturity in one calculation."],
    ["A bond with a duration of 10 is priced at 105. If interest rates rise by 1%, the price falls to approximately:", ["95.00", "104.00", "100.00", "94.50"], 3, "The price falls approximately 10% for the 1% rate change: 105 − (10% × 105) = 94.50."],
    ["An investor expecting interest rates to DECLINE should invest in bonds with:", ["Lower duration", "Shorter term and higher coupon", "Higher duration", "Zero duration"], 2, "Since higher duration translates into a higher percentage price change for a given change in yield, an investor realizes the greatest return from an expected decline in interest rates by investing in bonds with higher duration. Low duration protects against a rate increase."],
    ["The risk that CANNOT be eliminated or reduced by diversification is called:", ["Market or systematic risk", "Firm-specific risk", "Default risk", "Liquidity risk"], 0, "Market risk, also called systematic risk, cannot be eliminated or reduced by diversification. It arises from such things as inflation, the business cycle, and interest rates."],
    ["Two securities with perfect positive correlation (+1) held together will:", ["Eliminate all portfolio risk", "Reduce risk by exactly half", "Not reduce the overall risk of the portfolio", "Always produce a negative return"], 2, "The investor does not reduce risk by adding securities that are perfectly correlated with each other. Holding securities with perfect positive correlation does not reduce the overall risk of the portfolio."],
    ["The maximum gain from diversification is achieved when securities exhibit:", ["Perfect positive correlation", "Zero correlation", "Perfect negative correlation", "High beta"], 2, "With perfect negative correlation (−1) there is no variability in the total returns for the two assets, and thus no risk for the portfolio. In reality, however, it is very difficult to find securities with such a high level of negative correlation."],
    ["As more poorly correlated securities are added to a portfolio:", ["Risk reduction accelerates indefinitely", "Systematic risk is eventually eliminated", "Risk increases", "Each additional security reduces risk at a lower rate"], 3, "Adding poorly correlated securities does reduce risk, but each additional security reduces risk at a lower rate. Since the securities remain positively correlated to some degree, systematic risk cannot be eliminated."],
    ["The excess return earned on a portfolio, attributed to the manager's security-picking skill, is called:", ["Alpha", "Beta", "Variance", "Duration"], 0, "Alpha is the excess return earned on the portfolio. It arises when equity portfolios outperform the market and move more than would be expected from their beta, due to the manager's skill."],
    ["If markets are completely efficient, then:", ["Active management is clearly justified", "There would be no justification for active portfolio management", "Insider trading becomes legal", "Beta is always 1.0"], 1, "If markets were completely efficient there would be no justification for active portfolio management, because prices would already reflect all the information that exists about securities."],
    ["Obtaining material non-public information from a friend in high places and trading on it constitutes:", ["Active management", "Illegal insider trading", "Market timing", "Fundamental analysis"], 1, "Trading on inside information of material significance that has not yet been made public constitutes illegal insider trading and will expose you to legal action."],
    ["A manager who tries to shift between classes of securities based on anticipated economic changes is using:", ["Market timing", "Passive management", "Strategic asset allocation", "Technical rebalancing"], 0, "Market timing is an active strategy where the manager times the shift from one class of security to another depending on anticipated changes. It is the basic strategy of some balanced mutual funds, and in practice timers often change allocation too early or too late."],
    ["The single most important decision made by a portfolio manager is:", ["Selecting individual securities", "Choosing a benchmark index", "The asset allocation decision", "Setting the management fee"], 2, "The single most important decision, one that accounts for most of the success or failure of a portfolio, is the asset allocation decision — the selection of the classes of securities to be held and in what proportion."],
    ["The long-term base policy mix that will be adhered to through monitoring and rebalancing is called:", ["Strategic asset allocation", "Market timing", "Sector weighting", "Tactical allocation"], 0, "This base policy mix is called the strategic asset allocation. It is the long-term mix that will be adhered to by monitoring and, when necessary, rebalancing."],
    ["A client requests an asset allocation different from the one recommended. You may process it:", ["Never", "Always, since it is the client's money", "Only with written approval from the fund company", "Only if the KYC data and the request show an acceptable fit"], 3, "If the know your client data and the client's request show an acceptable fit, you can process the request while indicating that your financial institution does not recommend it. If the fit is not right, you may not process the request."],
    ["By far the most important single factor affecting the price of a corporate security, according to fundamental analysis, is:", ["Trading volume", "The number of shares outstanding", "Recurring chart patterns", "The actual or expected profitability of the issuer"], 3, "Fundamental analysis holds that by far the most important single factor affecting the price of a corporate security is the actual or expected profitability of the issuer."],
    ["Technical analysis is best described as the study of:", ["Historical stock prices and market behaviour to identify recurring patterns", "Macroeconomic conditions and industry outlook", "Company financial statements and management quality", "The yield curve and interest rate forecasts"], 0, "Technical analysis is the study of historical stock prices and stock market behaviour to identify recurring patterns in the data — price movements, trading volumes, and the number of rising and falling issues over time."]
  ]
};
