window.IFC = window.IFC || {};
window.IFC[14] = {
 "n": 14,
 "section": "Investment Funds in Canada · Section 5 · Chapter 14",
 "shortTitle": "Mutual Fund Performance",
 "title": "Understanding Mutual Fund&nbsp;Performance",
 "lede": "A short chapter with two formulas (NAVPS gain and the Sharpe ratio), one benchmark table, one quartile table and a list of reasons peer comparisons mislead. The exam tests whether you can run the numbers, match a fund to the right index, place a fund in a quartile, and explain why a fund that lost money can still have performed well.",
 "examNote": "Exam topic: <b>Evaluating and Selecting Mutual Funds</b> — 16% of the exam across Chapters 14–16.",
 "footer": "Distilled from <em>Investment Funds in Canada</em>, Section 5, Chapter 14 (CSI, 2024). Study aid only — not a substitute for the official text.",
 "highYield": [
  "<b>Sharpe ratio = (Rp − Rf) ÷ σp</b>: excess return over the risk-free rate divided by standard deviation. Textbook: (6% − 1%) ÷ 5% = <b>1</b>. A positive Sharpe means the fund's average return beat the average risk-free return.",
  "In the Sharpe ratio, <b>Rf is typically the average three-month Treasury bill rate</b> over the period, and the risk measure is <b>standard deviation</b> — not beta.",
  "<b>NAVPS gain = (Ending NAVPS − Beginning NAVPS) ÷ Beginning NAVPS × 100</b>. Textbook: $19.50 → $21.50 = <b>10.26%</b>. Divide by the <em>beginning</em> value.",
  "The NAVPS method assumes <b>reinvestment of all dividends</b> and <b>no additions or withdrawals</b> during the period; if money went in or out, the result may be inaccurate.",
  "A <b>quartile</b> splits a peer group into four equal parts: 1st = best (highest returns), 4th = worst. 100 funds → 25 per quartile; 872 funds → <b>218</b> per quartile.",
  "Performance assessment uses <b>two kinds of benchmarks</b>: a <b>benchmark index</b> (well-known market index) and a <b>comparison universe</b> (peer group of funds with comparable asset classes and risk profiles).",
  "Comparing with a <b>peer group</b> is the <b>most popular</b> method of relative performance evaluation. Peer group = comparison universe = performance universe.",
  "<b>Survivorship bias</b>: failed funds drop out of the universe, so it becomes a universe of survivors. Result: a median manager <b>ranks lower and lower</b> over 3-, 5- and 10-year periods. Every universe has some of it.",
  "Benchmark matches (Table 14.1): <b>S&amp;P/TSX 60</b> → Canadian large-cap; <b>S&amp;P 500</b> → U.S. equity; <b>MSCI EAFE</b> → non-North American equity; <b>91-Day T-Bill</b> → money market / cash.",
  "Four drawbacks of the comparison universe: <b>definition of universes</b>, <b>matching of risk profiles</b>, <b>universe size</b> (too small = not reliable), <b>survivorship bias</b>.",
  "Five volatility measures: <b>standard deviation</b>, <b>beta</b>, number of calendar years with a loss, best and worst 12-month periods, worst annual/quarterly/monthly losses.",
  "<b>Beta</b> measures how much more or less volatile a fund is than the market it invests in. Beta of <b>0.8</b> = less volatile than its index.",
  "Most managers aim for <b>stable, consistent performance in the top two quartiles</b>. One-year rankings are volatile; consistent performers should rank higher in choice than volatile ones.",
  "A manager's benchmark is often set in the <b>investment policy statement</b>, the formal document guiding the portfolio's overall asset management. One common benchmark is the <b>T-bill rate plus a margin</b> (e.g. T-bill + 4%).",
  "Measures must use the <b>same time period</b> as the benchmark, and the benchmark must be <b>relevant</b>: an equity fund cannot be compared with a bond index.",
  "A fund's label may not match its holdings. Allocating <b>10%</b> to gold funds that hold <b>50%</b> cash gives only <b>5%</b> actual gold exposure."
 ],
 "method": {
  "title": "How to beat Chapter 14",
  "sub": "Two formulas, two tables, one bias",
  "steps": [
   "<b>Drill the two formulas until they are automatic.</b> NAVPS gain divides by the <em>beginning</em> NAVPS. In the Sharpe ratio, subtract the risk-free rate <em>before</em> dividing by σ. Most wrong answers on the calculation questions come from those two slips.",
   "<b>Learn Table 14.1 as index → fund type pairs.</b> The usual traps: TSX 60 (large-cap) vs. TSX Composite (all Canadian equity), EAFE (non-North American) vs. S&amp;P 500 (U.S.), and Canada ESG Leaders vs. World ESG Leaders.",
   "<b>Practise quartile arithmetic.</b> Quartile size = universe ÷ 4. To place a rank, find the quartile boundaries first: 1st ends at N/4, 2nd at N/2, 3rd at 3N/4. Remember that 1st is the best.",
   "<b>Memorize the fixed-count lists:</b> 2 benchmark types, 3 standards for a measure, 5 volatility measures, 4 comparison-universe drawbacks. EXCEPT questions come from these lists.",
   "<b>Use the case study as a template for scenario questions:</b> a negative absolute return is judged against the peer group, the benchmark, beta and the long-term record before any decision to sell."
  ],
  "flag": {
   "label": "Where the marks actually are",
   "text": "The Sharpe ratio and the NAVPS gain calculation; picking the right benchmark index; quartile meaning and arithmetic; survivorship bias; and the rule that comparisons must use similar funds over the same period. This chapter has few pages but carries much of the calculation weight in the 16% Chapters 14–16 block."
  }
 },
 "objectives": [
  {
   "tag": "LO 1 · Part A",
   "title": "Evaluating and measuring performance",
   "gist": "A return means nothing until you compare it with something: a benchmark, often set in the investment policy statement, or the average of comparable funds. Measuring performance means calculating the return over a defined evaluation period, usually from the change in NAVPS.",
   "blocks": [
    {
     "points": [
      "<b>Total rate of return</b> = income earned inside the fund (interest and dividends) plus the increase or decrease in the value of its securities.",
      "<b>Why measure?</b> The rep uses performance data to reassess whether the recommended fund is still suitable, and to judge how well the manager did relative to the <b>cost of management</b>.",
      "<b>Is 5% good?</b> It depends on the comparison. 5% when the benchmark returned −4% is superior; 10% when the benchmark returned 20% is poor.",
      "<b>The core question:</b> are the manager's security selections adding value beyond comparable funds or beyond a passive market index? Answering it is <b>performance assessment</b>."
     ]
    },
    {
     "points": [
      "<b>Performance evaluation:</b> a manager's success is judged by comparing the portfolio's total return with the <b>average total return of comparable portfolios</b>, which also shows roughly where the manager ranks among peers.",
      "<b>Individual investors</b> can estimate this ranking most easily from the fund surveys in financial publications. These show many funds, so both the total return and component returns can be compared (e.g. a portfolio's equity component vs. equity funds).",
      "<b>Benchmark:</b> managers are often measured against a predetermined benchmark specified in the <b>investment policy statement</b> (IPS), the formal document that guides the overall asset management of a portfolio.",
      "<b>T-bill-plus benchmark:</b> one common benchmark is the T-bill rate plus a performance margin, e.g. <b>T-bill rate + 4%</b>.",
      "<b>Performance measurement</b> = calculating the return a manager realized over a specified time interval called the <b>evaluation period</b>."
     ]
    },
    {
     "formula": {
      "name": "Mutual fund gain (change in NAVPS)",
      "expr": "Gain (%) = (Ending NAVPS − Beginning NAVPS) ÷ Beginning NAVPS × 100",
      "vars": [
       [
        "Beginning NAVPS",
        "Net asset value per share (unit) at the start of the evaluation period"
       ],
       [
        "Ending NAVPS",
        "NAVPS at the end of the evaluation period"
       ],
       [
        "× 100",
        "Expresses the change as a percentage of the initial value"
       ]
      ],
      "example": "Beginning NAVPS $19.50, ending NAVPS $21.50.<br>Change = $21.50 − $19.50 = $2.00<br>Gain = $2.00 ÷ $19.50 × 100 = <b>10.26%</b>",
      "note": "The most frequently used performance measure. It assumes all dividends are reinvested and that the investor made no additions or withdrawals. Common mistakes: dividing by the ending NAVPS ($2.00 ÷ $21.50 = 9.30%) or reporting the dollar change."
     }
    },
    {
     "flag": {
      "label": "Exam trap: what the NAVPS method assumes",
      "text": "The calculation assumes <b>no additions to or withdrawals from</b> the portfolio during the period, and <b>reinvestment of all dividends</b>. If a client added or withdrew money, the return calculated this way <em>may be inaccurate</em>."
     }
    },
    {
     "steps": {
      "title": "Reverse direction: solving for a NAVPS",
      "items": [
       "Ending NAVPS = Beginning NAVPS × (1 + gain ÷ 100). Example: $15.00 × 1.08 = $16.20.",
       "Beginning NAVPS = Ending NAVPS ÷ (1 + gain ÷ 100). Example: $13.80 ÷ 1.15 = $12.00.",
       "Check: (16.20 − 15.00) ÷ 15.00 = 8%. Never take the percentage of the ending value when solving for the beginning value."
      ]
     }
    }
   ]
  },
  {
   "tag": "LO 1 · Part B",
   "title": "Risk-adjusted return: the Sharpe ratio",
   "gist": "Two funds with the same return are not equally good if one took twice the risk. The Sharpe ratio divides a fund's return above the risk-free rate by its standard deviation, giving one number for return per unit of risk.",
   "blocks": [
    {
     "points": [
      "<b>Why returns alone mislead:</b> Funds A and B both returned <b>7%</b>, but A's standard deviation was 5% and B's was 10%. B took <b>twice the risk</b> to earn the same return.",
      "<b>Sharpe ratio</b>: used by fund companies and portfolio managers. It compares the portfolio's <b>excess return</b> (return minus the risk-free return) with its <b>standard deviation</b>.",
      "<b>Risk-adjusted rate of return</b>: what the Sharpe ratio measures, using standard deviation as the measure of risk."
     ]
    },
    {
     "formula": {
      "name": "Sharpe ratio",
      "expr": "Sp = (Rp − Rf) ÷ σp",
      "vars": [
       [
        "Sp",
        "Sharpe ratio of the portfolio"
       ],
       [
        "Rp",
        "Return of the portfolio"
       ],
       [
        "Rf",
        "Risk-free rate, typically the average three-month Treasury bill rate over the period measured"
       ],
       [
        "σp",
        "Standard deviation of the portfolio's returns"
       ]
      ],
      "example": "DEF Canadian Equity Fund: average return 6%, standard deviation 5%, average risk-free return 1%.<br>Sp = (6 − 1) ÷ 5 = 5 ÷ 5 = <b>1</b><br>Positive, so the fund's average return exceeded the average risk-free return.",
      "note": "Subtract Rf first, then divide. Forgetting Rf gives 6 ÷ 5 = 1.2; dividing first and then subtracting gives 6 ÷ 5 − 1 = 0.2. Enter percentages as whole numbers (6, not 0.06) throughout."
     }
    },
    {
     "table": {
      "caption": "Reading a Sharpe ratio",
      "head": [
       "Result",
       "What it tells you"
      ],
      "rows": [
       [
        "Positive",
        "Average return was greater than the average risk-free return (textbook)"
       ],
       [
        "Zero",
        "Return equalled the risk-free rate: no reward for the risk taken"
       ],
       [
        "Negative",
        "Return was below the risk-free rate: T-bills would have done better"
       ],
       [
        "Higher of two funds",
        "More excess return per unit of standard deviation, so better risk-adjusted performance"
       ]
      ]
     }
    },
    {
     "flag": {
      "label": "Exam trap: comparing two funds",
      "text": "The fund with the higher return is not necessarily the better fund. With Rf = 2%, Funds A and B from the textbook (both 7%) have Sharpe ratios of (7 − 2) ÷ 5 = <b>1.0</b> and (7 − 2) ÷ 10 = <b>0.5</b>. A delivered twice the risk-adjusted return. Note: the textbook gives no risk-free rate for this example; 2% is used here only for practice."
     }
    },
    {
     "steps": {
      "title": "Reverse direction: solving for the return or the risk",
      "items": [
       "Required return: Rp = Rf + Sharpe × σ. Example: 2.5 + 0.8 × 10 = 10.5%.",
       "Implied standard deviation: σ = (Rp − Rf) ÷ Sharpe. Example: (11 − 3) ÷ 0.5 = 16%.",
       "Check by putting the answer back into (Rp − Rf) ÷ σ."
      ]
     }
    },
    {
     "points": [
      "<b>Dissimilar portfolios</b> are hard to compare because they can differ in risk characteristics or in special investor constraints or objectives. Conclusions should be adjusted for those factors.",
      "<b>Focus on the long term:</b> investors should be concerned primarily with <b>longer-term results</b>, because these best measure a manager's ability in all phases of the business cycle.",
      "<b>Consistency and trend</b> also matter: look at the results over the last few measurement periods."
     ]
    }
   ]
  },
  {
   "tag": "LO 2 · Part A",
   "title": "Performance assessment: benchmark indexes and comparison universes",
   "gist": "Performance assessment compares a manager's results with a reliable yardstick to decide whether the return was comparatively good. There are two yardsticks: a market index matched to the fund's universe, or a peer group of similar funds.",
   "blocks": [
    {
     "points": [
      "<b>Performance assessment</b> = comparing a fund manager's results with those of an established and reliable benchmark to determine whether there has been a comparatively &ldquo;good&rdquo; return on investment.",
      "<b>Two kinds of benchmarks:</b> (1) <b>benchmark indexes</b>, the performance of a well-known market index; (2) <b>comparison universe</b>, the performance of a group of funds with comparable asset classes and risk profiles."
     ]
    },
    {
     "steps": {
      "title": "A performance measure should (3 standards)",
      "items": [
       "Identify <b>superior, ordinary and inferior</b> performance.",
       "Not require manipulation, assuming the measure itself is fundamentally sound.",
       "Be sufficiently realistic to be useful in practice."
      ]
     }
    },
    {
     "points": [
      "<b>Data and time period:</b> a measure is useful only if it is based on data and comparable time periods. Data providers include <b>Morningstar</b> and <b>the Globe and Mail</b>.",
      "<b>Same-period rule:</b> you must use the <b>same time period</b> for the fund and its benchmark; otherwise the analysis is irrelevant.",
      "<b>Benchmark index</b> = an index that reflects a fund's investment universe and serves as the standard for measuring its performance. Every mutual fund has one.",
      "<b>Relevance rule:</b> an equity fund cannot be compared against a bond index, because that compares two different types of securities.",
      "<b>Reading the result:</b> fund return above the index return means it <b>outperformed</b> its benchmark; below means it <b>underperformed</b>."
     ]
    },
    {
     "table": {
      "caption": "Table 14.1 — Key Canadian mutual fund benchmarks",
      "head": [
       "Index",
       "What it measures",
       "Used for"
      ],
      "rows": [
       [
        "S&amp;P/TSX Composite",
        "Largest listed equities on the Toronto Stock Exchange, by market capitalization",
        "Canadian equity funds"
       ],
       [
        "S&amp;P/TSX 60",
        "The 60 largest TSX companies, by market capitalization",
        "Canadian <b>large-cap</b> equity funds"
       ],
       [
        "S&amp;P 500",
        "The 500 largest publicly held companies trading on U.S. markets",
        "U.S. equity funds"
       ],
       [
        "MSCI EAFE Index",
        "MSCI index of European, Australasian and Far East stocks",
        "<b>Non-North American</b> equity funds"
       ],
       [
        "FTSE Canada Universe Bond Index",
        "Broad measure of the Canadian government and corporate bond market",
        "Canadian bond funds"
       ],
       [
        "FTSE Canada 91-Day T-Bill Index",
        "Return of 91-day Canadian Treasury bills",
        "Cash component of a portfolio, or money market funds"
       ],
       [
        "MSCI Canada ESG Leaders Index",
        "Large- and mid-cap Canadian companies with strong ESG ratings",
        "Canadian ESG funds"
       ],
       [
        "MSCI World ESG Leaders Index",
        "Broad measure of global companies with strong ESG ratings",
        "Global ESG funds"
       ]
      ]
     }
    },
    {
     "flag": {
      "label": "Textbook discrepancy — know both numbers",
      "text": "The body text and Summary call the Canadian bond benchmark the <b>FTSE TMX Canada Universe Bond Index</b>; Table 14.1 calls it the <b>FTSE Canada Universe Bond Index</b>. It is the same index under an older and a newer name. Recognize either on the exam."
     }
    },
    {
     "points": [
      "<b>Peer group</b>: mutual funds with similar investment mandates. Comparing a fund with its peer group is the <b>most popular</b> method of relative performance evaluation.",
      "<b>Comparison universe / performance universe</b>: the collection of funds that forms the basis for comparison (another name for the peer group). Example: a Canadian large-cap equity fund vs. all other Canadian large-cap equity funds.",
      "<b>Example:</b> a fund returned 12% over one year while its peer-group average was 9%, so it <b>outperformed</b> its peer group by 3 percentage points.",
      "<b>Appraisal firms</b>: professional firms such as <b>Morningstar</b> and <b>the Globe and Mail</b> that build comparison universes by collecting and regularly reporting performance data from many funds."
     ]
    },
    {
     "formula": {
      "name": "Relative performance (out- or underperformance)",
      "expr": "Relative performance (percentage points) = Fund return − Benchmark (or peer-average) return",
      "vars": [
       [
        "Fund return",
        "Fund's return for the evaluation period"
       ],
       [
        "Benchmark return",
        "Return of the relevant index, the peer-group average, or the IPS benchmark (e.g. T-bill + 4%) for the SAME period"
       ]
      ],
      "example": "Textbook: fund 5% vs. benchmark −4% → 5 − (−4) = <b>+9 points</b> (superior). Fund 10% vs. benchmark 20% → <b>−10 points</b> (poor). Fund 12% vs. peer average 9% → <b>+3 points</b>.<br>IPS variant: T-bill average 2.75%, benchmark T-bill + 4% = 6.75%; fund 5.9% → <b>−0.85 points</b>.",
      "note": "The textbook does not give this as a formula; it is the arithmetic behind its out/underperform examples. With an IPS benchmark, build the benchmark first (T-bill + margin), then subtract."
     }
    }
   ]
  },
  {
   "tag": "LO 2 · Part B",
   "title": "What complicates comparisons: mislabelled funds and risk",
   "gist": "A comparison is valid only between similar funds with similar risk. Fund labels can hide what a fund actually holds, and two funds of the same type can carry very different volatility, so assessment must look at risk measures as well as returns.",
   "blocks": [
    {
     "points": [
      "<b>Compare like with like:</b> do not compare dissimilar funds (e.g. a fixed-income fund vs. a growth equity fund) or funds with different investment objectives or degrees of risk acceptance.",
      "<b>Label vs. holdings:</b> a fund's name or class may not reflect its actual asset base. A &ldquo;Canadian equity&rdquo; fund may hold a significant portion in non-Canadian equities.",
      "<b>Not wrongdoing:</b> managers adjust the timing of investments to market trends. But published comparisons may then be &ldquo;apples with oranges&rdquo;.",
      "<b>Portfolio impact:</b> the mismatch can distort an asset allocation. An investor who puts 10% into gold funds holding 50% cash ends up with only <b>5%</b> in gold."
     ]
    },
    {
     "formula": {
      "name": "Actual (effective) exposure through a fund",
      "expr": "Actual exposure = Allocation to the fund × (1 − Fund's cash or off-mandate share)",
      "vars": [
       [
        "Allocation to the fund",
        "Share of the portfolio placed in the fund"
       ],
       [
        "Cash or off-mandate share",
        "Portion of the fund NOT invested in its labelled asset class"
       ]
      ],
      "example": "Textbook: 10% allocated to gold funds holding 50% cash → 10% × (1 − 0.50) = <b>5%</b> actual gold exposure, not the desired 10%.",
      "note": "Reverse: allocation needed = target exposure ÷ (1 − cash share). For 9% exposure through a fund holding 25% cash: 9 ÷ 0.75 = 12%. The textbook states only the forward example; the reverse is the same arithmetic."
     }
    },
    {
     "points": [
      "<b>Risk is often ignored:</b> comparisons often make no attempt to account for the relative risk of funds of the same type. One equity fund may be managed conservatively while another buys much riskier stocks.",
      "<b>Volatility rule:</b> any assessment of fund performance should consider the volatility of returns. From the investor's standpoint, more volatile = riskier."
     ]
    },
    {
     "steps": {
      "title": "Measures used to quantify volatility (5)",
      "items": [
       "Standard deviation of the fund's returns",
       "Beta",
       "Number of calendar years the fund has lost money",
       "The fund's best and worst 12-month periods",
       "The fund's worst annual, quarterly or monthly losses"
      ]
     }
    },
    {
     "points": [
      "<b>Standard deviation</b> measures how volatile a fund has been over a past period, as an indication of how it might behave in the future. It is a common measure of the <b>consistency</b> of a fund's return.",
      "<b>Reading standard deviation:</b> the higher it is, the more volatile or unpredictable the return. A fund that earned a steady 5% a year for 20 years can reasonably (not certainly) be expected to earn 5%. One that swung between −20% and +20% is much less likely to.",
      "<b>Best/worst-case methods</b> look at different time periods. <b>Multi-period ratings</b> avoid placing too much emphasis on one short-term period.",
      "<b>Market cycle:</b> some funds outperform in rising markets but do worse than average in bear markets. Pay particular attention to periods when the fund lost money.",
      "<b>Beta</b>, available on most fund performance software, measures how much more or less volatile a fund is than the <b>underlying market</b> it invests in. Beta below 1 (e.g. 0.8) = less volatile than the index."
     ]
    },
    {
     "table": {
      "caption": "Standard deviation vs. beta",
      "head": [
       "",
       "Standard deviation",
       "Beta"
      ],
      "rows": [
       [
        "Measures",
        "Volatility of the fund's own returns over a past period",
        "Volatility of the fund relative to its underlying market"
       ],
       [
        "Reference point",
        "The fund's own average return",
        "The market or benchmark index"
       ],
       [
        "Used in the Sharpe ratio?",
        "Yes, it is the denominator",
        "No"
       ],
       [
        "Higher means",
        "More volatile, less predictable returns",
        "Moves more than the market"
       ]
      ]
     }
    }
   ]
  },
  {
   "tag": "LO 3",
   "title": "Quartile rankings and the limits of peer comparisons",
   "gist": "Quartiles rank a fund against its peer group in four equal blocks, from 1st (best) to 4th (worst). Consistency across years matters more than any single year. Peer universes have built-in flaws, especially survivorship bias, that can make average managers look worse over time.",
   "blocks": [
    {
     "points": [
      "<b>Quartile</b>: sorts performance into four equal parts within a peer group. A peer group of 100 funds gives four quartiles of <b>25</b> funds each.",
      "<b>Quartile size = universe ÷ 4</b>, and the universe can be any size. A Canadian Equity Balanced universe of 872 funds has <b>218</b> funds per quartile.",
      "<b>Realistic goal:</b> 1st-quartile results every year are very hard to achieve. Most managers aim for <b>stable, consistent performance in the top two quartiles</b>."
     ]
    },
    {
     "table": {
      "caption": "The four quartiles (peer group of 100)",
      "head": [
       "Quartile",
       "Funds",
       "Meaning"
      ],
      "rows": [
       [
        "1st",
        "Top 25",
        "Highest returns, best performers"
       ],
       [
        "2nd",
        "Next 25",
        "Next best performers"
       ],
       [
        "3rd",
        "Next 25",
        "Next performers"
       ],
       [
        "4th",
        "Bottom 25",
        "Worst performers in the peer group"
       ]
      ]
     }
    },
    {
     "formula": {
      "name": "Quartile size and placing a rank",
      "expr": "Quartile size = N ÷ 4.  Rank r falls in quartile 1 if r ≤ N/4; 2 if r ≤ N/2; 3 if r ≤ 3N/4; otherwise 4",
      "vars": [
       [
        "N",
        "Number of funds in the peer group (comparison universe)"
       ],
       [
        "r",
        "The fund's rank, where 1 = highest return"
       ]
      ],
      "example": "Textbook: N = 872 → 872 ÷ 4 = <b>218</b> funds per quartile. Boundaries: 218 / 436 / 654 / 872. A fund ranked 300th falls in the <b>2nd</b> quartile (219–436).",
      "note": "The textbook gives only the division. Placing a rank against the boundaries is the same idea. Do not assume 25 funds per quartile; that holds only when there are 100 funds."
     }
    },
    {
     "table": {
      "caption": "Figure 14.1 — Sample quartile ranking, Canadian equity funds (universe of 100)",
      "head": [
       "Fund",
       "Yr 1",
       "Yr 2",
       "Yr 3",
       "Yr 4",
       "Yr 5",
       "Textbook verdict"
      ],
      "rows": [
       [
        "ABC",
        "2",
        "3",
        "2",
        "3",
        "3",
        "Average but stable: never 1st, never 4th"
       ],
       [
        "DEF",
        "1",
        "1",
        "3",
        "4",
        "2",
        "Volatile: ranges from top to bottom"
       ],
       [
        "GHI",
        "1",
        "1",
        "2",
        "1",
        "1",
        "Superior: top quartile in 4 of 5 years"
       ],
       [
        "JKL",
        "4",
        "3",
        "4",
        "3",
        "4",
        "Weakest performer in the group"
       ]
      ]
     }
    },
    {
     "points": [
      "<b>Longer is steadier:</b> the longer the evaluation period, the more stable the returns of the comparison universe. Do not put much weight on short-term (e.g. one-year) quartile rankings, which are more volatile.",
      "<b>Suitability rule:</b> when assessing a fund for a client, <b>consistent performers should rank higher in choice than volatile performers</b>."
     ]
    },
    {
     "points": [
      "<b>Universe definition:</b> the contents of a universe must be clearly defined. A balanced fund universe may mix equity-heavy funds with bond funds that hold a little stock. Compare &ldquo;apples to apples&rdquo;.",
      "<b>Too broad hides risk:</b> small-cap managers have different risk than a general equity universe, and high-yield bond managers differ from a general bond universe.",
      "<b>Survivorship bias</b>: defunct portfolios drop out and are excluded from rankings in later quarters, so a universe is a universe of survivors. Terminated funds are usually the unsuccessful ones. <b>Every</b> universe has some survivorship bias, however carefully it is built.",
      "<b>Effect of survivorship bias:</b> a manager with median performance every quarter ranks <b>increasingly lower</b> in 3-, 5- and 10-year comparisons. Average and moderately good managers start to look like underperformers.",
      "<b>Different firms, different ranks:</b> each appraisal firm builds its universes differently. One manager can rank in the top half of one universe and the bottom half of a competitor's.",
      "<b>Not a passive strategy:</b> the textbook says the comparison universe approach would not work as a passive investment strategy."
     ]
    },
    {
     "table": {
      "caption": "Table 14.2 — Drawbacks of the comparison universe",
      "head": [
       "Problem",
       "Effect"
      ],
      "rows": [
       [
        "Definition of universes",
        "Universes defined too broadly or too variably are not comparable"
       ],
       [
        "Matching of risk profiles",
        "Universes that do not match for risk are not representative"
       ],
       [
        "Universe size",
        "Universes that are too small (e.g. split into sub-universes) are not reliable"
       ],
       [
        "Survivorship bias",
        "Termination of unsuccessful funds may leave the universe biased"
       ]
      ]
     }
    },
    {
     "flag": {
      "label": "Survivorship bias in numbers (illustration)",
      "text": "100 funds; a manager ranks 50th, the bottom of the 2nd quartile. The 20 worst funds close. The manager is still 50th, but now out of 80: the quartiles hold 20 funds each, so 50th falls in the <b>3rd</b> quartile. Performance did not change; the universe did."
     }
    },
    {
     "flag": {
      "label": "Case study lesson: it's all relative",
      "text": "Barry's emerging markets fund lost money over the year, so he wanted to sell. His rep checked it against its <b>peer group</b> (it beat 90% of peers, i.e. top quartile), its <b>benchmark</b> (the MSCI Emerging Markets index lost more), its <b>beta</b> (0.8, so less volatile than the index), its <b>Morningstar rating</b> (5 stars; 5 is best, 1 worst) and its <b>3-, 5- and 10-year</b> returns (above average). Conclusion: the fund performed well; keep a long-term perspective."
     }
    }
   ]
  }
 ],
 "numbers": [
  [
   "10.26%",
   "Textbook NAVPS gain: $19.50 → $21.50; $2.00 ÷ $19.50 × 100"
  ],
  [
   "$19.50 / $21.50",
   "Beginning / ending NAVPS in the textbook gain example"
  ],
  [
   "× 100",
   "Converts the NAVPS change (as a fraction of beginning NAVPS) into a percentage"
  ],
  [
   "1",
   "Sharpe ratio of fund DEF: (6% − 1%) ÷ 5%"
  ],
  [
   "6% / 5% / 1%",
   "Fund DEF: average return / standard deviation / average risk-free return"
  ],
  [
   "7%; σ 5% vs. 10%",
   "Funds A and B: same 7% return over 12 months; B had twice A's standard deviation, so twice the risk"
  ],
  [
   "Three-month T-bill",
   "Rf in the Sharpe ratio is typically the average three-month Treasury bill rate over the period"
  ],
  [
   "T-bill + 4%",
   "Example of a common IPS benchmark: the T-bill rate plus a performance margin"
  ],
  [
   "5% vs. −4%",
   "Manager beat the benchmark: superior performance (+9 points)"
  ],
  [
   "10% vs. 20%",
   "Manager trailed the benchmark: poor performance (−10 points)"
  ],
  [
   "12% vs. 9%",
   "Fund's one-year return vs. peer-group average: outperformed (+3 points)"
  ],
  [
   "2",
   "Kinds of benchmarks in performance assessment: benchmark indexes and comparison universe"
  ],
  [
   "3",
   "Standards a performance measure should meet"
  ],
  [
   "5",
   "Measures used to quantify volatility"
  ],
  [
   "4",
   "Drawbacks of the comparison universe (Table 14.2)"
  ],
  [
   "8",
   "Benchmark indexes listed in Table 14.1"
  ],
  [
   "60",
   "S&amp;P/TSX 60: the 60 largest TSX companies by market cap (Canadian large-cap benchmark)"
  ],
  [
   "500",
   "S&amp;P 500: the 500 largest publicly held companies on U.S. markets"
  ],
  [
   "91-day",
   "FTSE Canada 91-Day T-Bill Index: benchmark for money market funds and a portfolio's cash component"
  ],
  [
   "10% / 50% / 5%",
   "Desired gold allocation / gold funds' cash holding / actual gold exposure"
  ],
  [
   "5% for 20 years",
   "Steady-return example: reasonable (not guaranteed) to expect 5% again"
  ],
  [
   "−20% to +20%",
   "Volatile fund over 20 years: much less likely to earn 5% next year"
  ],
  [
   "12-month",
   "Best and worst 12-month periods: one of the five volatility measures"
  ],
  [
   "4 quartiles",
   "Peer group split into four equal parts; 1st = best, 4th = worst"
  ],
  [
   "100 → 25",
   "100-fund peer group gives 25 funds per quartile"
  ],
  [
   "872 → 218",
   "Canadian Equity Balanced universe of 872 funds gives 218 per quartile"
  ],
  [
   "Top two quartiles",
   "Where most managers aim for stable, consistent performance"
  ],
  [
   "5 years, 4 funds",
   "Figure 14.1 shows ABC, DEF, GHI and JKL over five years (universe of 100)"
  ],
  [
   "4 of 5 years",
   "GHI Fund ranked in the top quartile in four of five years"
  ],
  [
   "3-, 5-, 10-year",
   "Periods over which a median manager ranks increasingly lower because of survivorship bias"
  ],
  [
   "8 funds; 60/30/10",
   "Case study: Barry's 8-fund portfolio, about 60% equities, 30% bonds, 10% cash"
  ],
  [
   "4 of 5 equity funds",
   "Case study: four of Barry's five equity funds returned over 10%"
  ],
  [
   "90%",
   "Case study: the emerging markets fund outperformed 90% of its peers"
  ],
  [
   "0.8",
   "Case study: fund's beta, so less volatile than its index"
  ],
  [
   "5 stars",
   "Morningstar rating of risk-adjusted performance vs. peers: 5 best, 1 worst"
  ]
 ],
 "traps": [
  [
   "Performance measurement",
   "<b>Calculating</b> the return realized over a specified evaluation period (e.g. the NAVPS gain).",
   "Performance assessment",
   "<b>Comparing</b> the manager's results with an established, reliable benchmark to judge whether the return was comparatively good."
  ],
  [
   "Benchmark index",
   "A well-known <b>market index</b> reflecting the fund's investment universe (e.g. S&amp;P/TSX Composite).",
   "Comparison universe",
   "A <b>group of funds</b> with comparable asset classes and risk profiles; also called peer group or performance universe."
  ],
  [
   "Standard deviation",
   "Volatility of the fund's <b>own returns</b>; the risk measure in the Sharpe ratio.",
   "Beta",
   "Volatility of the fund <b>relative to its underlying market</b>; not used in the Sharpe ratio."
  ],
  [
   "S&amp;P/TSX Composite",
   "Largest listed TSX equities: benchmark for <b>Canadian equity funds</b>.",
   "S&amp;P/TSX 60",
   "60 largest TSX companies: benchmark for <b>Canadian large-cap</b> equity funds."
  ],
  [
   "MSCI EAFE",
   "Europe, Australasia, Far East: benchmark for <b>non-North American</b> equity funds.",
   "S&amp;P 500",
   "500 largest U.S.-traded companies: benchmark for <b>U.S. equity funds</b>."
  ],
  [
   "MSCI Canada ESG Leaders",
   "Large- and mid-cap <b>Canadian</b> companies with strong ESG ratings: Canadian ESG funds.",
   "MSCI World ESG Leaders",
   "<b>Global</b> companies with strong ESG ratings: global ESG funds."
  ],
  [
   "FTSE Canada Universe Bond Index",
   "Canadian government and corporate bond market: <b>Canadian bond funds</b>.",
   "FTSE Canada 91-Day T-Bill Index",
   "91-day T-bill returns: <b>money market funds</b> and a portfolio's cash component."
  ],
  [
   "1st quartile",
   "Top 25%: the <b>best</b> performers with the highest returns.",
   "4th quartile",
   "Bottom 25%: the <b>worst</b> performers in the peer group."
  ],
  [
   "NAVPS gain: divide by BEGINNING NAVPS",
   "($21.50 − $19.50) ÷ $19.50 = <b>10.26%</b> (correct).",
   "Dividing by ENDING NAVPS",
   "$2.00 ÷ $21.50 = 9.30%: wrong base."
  ],
  [
   "Sharpe: subtract Rf, then divide",
   "(6 − 1) ÷ 5 = <b>1</b> (correct).",
   "Sharpe without Rf / divide first",
   "6 ÷ 5 = 1.2, or 6 ÷ 5 − 1 = 0.2: both wrong."
  ],
  [
   "Survivorship bias",
   "Failed funds <b>drop out</b> of the universe, so median managers look <b>worse</b> over longer periods.",
   "Short-term ranking volatility",
   "One-year quartile ranks <b>jump around</b>; longer periods give more stable universe returns."
  ],
  [
   "Consistent performer (ABC)",
   "Never 1st, never 4th: the textbook says consistent performers should rank <b>higher</b> in choice.",
   "Volatile performer (DEF)",
   "Swings from 1st to 4th: harder to rely on, even with some top-quartile years."
  ],
  [
   "Positive Sharpe ratio",
   "Average return was <b>greater</b> than the average risk-free return.",
   "Higher return",
   "Says nothing about risk on its own: equal 7% returns can carry σ of 5% or 10%."
  ],
  [
   "Investment policy statement",
   "Formal document guiding a portfolio's overall asset management; often specifies the <b>benchmark</b>.",
   "Appraisal firms",
   "Firms (Morningstar, the Globe and Mail) that <b>build comparison universes</b> and report performance data."
  ]
 ],
 "cards": [
  [
   "What is an investment policy statement?",
   "A formal document that guides the overall asset management of a portfolio. A manager's predetermined <b>benchmark</b> is often specified in it."
  ],
  [
   "What is a benchmark, as used in this chapter?",
   "A predetermined standard a manager is measured against, often specified in the investment policy statement. One common example is the T-bill rate plus a margin (e.g. T-bill + 4%)."
  ],
  [
   "What is a benchmark index?",
   "An index that reflects a mutual fund's investment universe and serves as the standard for measuring its performance (e.g. S&amp;P/TSX Composite for Canadian equity funds). It must be relevant to the fund."
  ],
  [
   "What is performance assessment?",
   "Comparing a fund manager's results with those of an established and reliable benchmark to determine whether there has been a comparatively &ldquo;good&rdquo; return on investment."
  ],
  [
   "What is performance measurement?",
   "Calculating the return realized by a portfolio manager over a specified time interval, called the <b>evaluation period</b>."
  ],
  [
   "What two kinds of benchmarks is performance assessment based on?",
   "<ol><li><b>Benchmark indexes</b>: the performance of a well-known market index</li><li><b>Comparison universe</b>: the performance of a group of funds with comparable asset classes and risk profiles</li></ol>"
  ],
  [
   "What are the three standards a performance measure should meet?",
   "<ol><li>Identify superior, ordinary and inferior performance</li><li>Not require manipulation (assuming the measure is fundamentally sound)</li><li>Be sufficiently realistic to be useful in practice</li></ol>"
  ],
  [
   "What are the three names for the group of similar funds a fund is compared against?",
   "<b>Peer group</b>, <b>comparison universe</b>, <b>performance universe</b>: funds with similar investment mandates."
  ],
  [
   "What is the most popular method of relative performance evaluation?",
   "Comparing a fund's return with the performance of its <b>peer group</b> (comparison universe)."
  ],
  [
   "What are appraisal firms? Name two.",
   "Professional performance appraisal firms that build comparison universes by collecting performance data from many funds and reporting it regularly, such as <b>Morningstar</b> and <b>the Globe and Mail</b>."
  ],
  [
   "What is the formula for the gain based on NAVPS?",
   "Gain (%) = (Ending NAVPS − Beginning NAVPS) ÷ <b>Beginning</b> NAVPS × 100"
  ],
  [
   "What gain does the textbook calculate for NAVPS rising from $19.50 to $21.50?",
   "($21.50 − $19.50) ÷ $19.50 × 100 = <b>10.26%</b>"
  ],
  [
   "What does the NAVPS gain method assume?",
   "Reinvestment of all dividends, and <b>no additions or withdrawals</b> during the period. If money was added or withdrawn, the calculated return may be inaccurate."
  ],
  [
   "What makes up a fund's total rate of return?",
   "Interest and dividend income generated within the fund <b>plus</b> the increase (or decrease) in the value of its securities."
  ],
  [
   "What is the Sharpe ratio formula, and what is Rf?",
   "Sp = (Rp − Rf) ÷ σp. Rf is the risk-free rate, typically the <b>average three-month T-bill rate</b> over the period measured."
  ],
  [
   "What Sharpe ratio does the textbook calculate for fund DEF, and what does it mean?",
   "Return 6%, σ 5%, Rf 1%: (6 − 1) ÷ 5 = <b>1</b>. A positive ratio means the average return exceeded the average risk-free return."
  ],
  [
   "What does the Sharpe ratio measure, and which risk measure does it use?",
   "The <b>risk-adjusted rate of return</b>: excess return over the risk-free rate per unit of risk, using <b>standard deviation</b> (not beta) as the risk measure."
  ],
  [
   "Funds A and B both returned 7%, with standard deviations of 5% and 10%. What is the textbook's point?",
   "Same return, but B held <b>twice the risk</b>. Returns cannot be compared fairly without factoring in the risk taken to earn them."
  ],
  [
   "Why should investors focus on longer-term results?",
   "Longer-term results best measure a manager's ability in <b>all phases of the business cycle</b>. Consistency and the trend over the last few periods also matter."
  ],
  [
   "What must be true of the time periods when comparing a fund with its benchmark?",
   "They must be the <b>same</b> time period; otherwise the analysis is irrelevant."
  ],
  [
   "Why can't you assess an equity fund against a bond index?",
   "The benchmark must be relevant. Comparing an equity fund with a bond index compares two different types of securities."
  ],
  [
   "What is the benchmark for each fund type: Canadian equity, Canadian large-cap, U.S. equity, non-North American equity?",
   "S&amp;P/TSX Composite; S&amp;P/TSX 60; S&amp;P 500; MSCI EAFE."
  ],
  [
   "What is the benchmark for each fund type: Canadian bonds, money market, Canadian ESG, global ESG?",
   "FTSE Canada Universe Bond Index; FTSE Canada 91-Day T-Bill Index (also for a portfolio's cash component); MSCI Canada ESG Leaders; MSCI World ESG Leaders."
  ],
  [
   "What does EAFE stand for?",
   "Europe, Australasia and the Far East. The MSCI EAFE Index is the benchmark for <b>non-North American</b> equity funds."
  ],
  [
   "What does it mean when a fund outperforms or underperforms its benchmark?",
   "Outperformed: its return was higher than the index return. Underperformed: its return was lower than the index return."
  ],
  [
   "Which kinds of funds should not be compared with each other?",
   "Dissimilar funds (e.g. a fixed-income fund vs. a growth equity fund) and funds with differing investment objectives or degrees of risk acceptance."
  ],
  [
   "How can a fund's classification mislead an investor? Give the textbook example.",
   "Its name or class may not match what it holds. An investor allocating 10% to gold funds that hold 50% cash actually has only <b>5%</b> in gold."
  ],
  [
   "Is a Canadian equity fund holding significant foreign stocks doing something wrong?",
   "No. The textbook says managers adjust timing to market trends. But published comparisons may then be &ldquo;apples with oranges&rdquo;."
  ],
  [
   "What are the five measures used to quantify volatility?",
   "<ol><li>Standard deviation of returns</li><li>Beta</li><li>Number of calendar years it lost money</li><li>Best and worst 12-month periods</li><li>Worst annual, quarterly or monthly losses</li></ol>"
  ],
  [
   "What does standard deviation tell you about a fund?",
   "How volatile it has been over a past period, as an indication of future behaviour. It measures the <b>consistency</b> of returns: higher σ means more volatile, less predictable returns."
  ],
  [
   "What does beta measure?",
   "How much more or less volatile a fund is than the <b>underlying market</b> it invests in. It is available on most fund performance software."
  ],
  [
   "Why are multi-period ratings systems useful?",
   "They avoid placing too much emphasis on how well or poorly a fund did during one short-term period."
  ],
  [
   "What is a quartile?",
   "A ranking that sorts performance within a peer group into <b>four equal parts</b>. The 1st quartile is the best (highest returns) and the 4th is the worst."
  ],
  [
   "How many funds are in each quartile of a 100-fund universe, and of an 872-fund universe?",
   "100 ÷ 4 = <b>25</b>; 872 ÷ 4 = <b>218</b>."
  ],
  [
   "What quartile performance do most fund managers realistically aim for?",
   "Stable, consistent performance in the <b>top two quartiles</b>. 1st-quartile results every year are very hard to achieve."
  ],
  [
   "In Figure 14.1, which fund was best, which was weakest, and which was stable but average?",
   "Best: <b>GHI</b> (top quartile in 4 of 5 years). Weakest: <b>JKL</b>. Stable but average: <b>ABC</b> (between 2nd and 3rd, never 1st or 4th)."
  ],
  [
   "How much weight should one-year quartile rankings get?",
   "Little. Short-term rankings are more volatile, and longer periods give more stable universe returns. Consistent performers should rank higher in choice than volatile ones."
  ],
  [
   "What is survivorship bias?",
   "The bias that develops as defunct funds drop out of a comparison universe and are excluded from later rankings. The universe becomes one of survivors, because terminated funds are usually the unsuccessful ones."
  ],
  [
   "How does survivorship bias affect a manager with median performance every quarter?",
   "The manager ranks increasingly lower in 3-, 5- and 10-year comparisons, so average and moderately good managers look like underperformers."
  ],
  [
   "Can a well-built comparison universe avoid survivorship bias?",
   "No. <b>All</b> comparison universes have some degree of survivorship bias, however carefully they are constructed."
  ],
  [
   "What are the four drawbacks of the comparison universe (Table 14.2)?",
   "<ol><li>Definition of universes: too broad/variable = not comparable</li><li>Matching of risk profiles: no risk match = not representative</li><li>Universe size: too small = not reliable</li><li>Survivorship bias: closures of failed funds = biased</li></ol>"
  ],
  [
   "Why might one fund rank in the top half at one appraisal firm and the bottom half at another?",
   "Each appraisal firm has its own methods of universe construction and compilation, and the differences can be substantial."
  ],
  [
   "Why is a broad equity universe a poor yardstick for a small-cap manager?",
   "A universe defined too broadly does not help assess risk. Small-cap managers have different risk characteristics than the universe in general; the same applies to high-yield bond managers in a general bond universe."
  ],
  [
   "In the case study, what made the losing emerging markets fund a good performer?",
   "It beat 90% of its peers, lost less than the MSCI Emerging Markets index, had a beta of 0.8 (less volatile than the index), was rated 5 stars by Morningstar, and was above average over 3, 5 and 10 years."
  ],
  [
   "What does the Morningstar star rating capture, and what is the scale?",
   "A fund's risk-adjusted returns relative to its peers, on a 5-star scale: <b>5 is best</b>, 1 is worst."
  ],
  [
   "What should a rep check before agreeing to sell a fund that lost money?",
   "Per the case study: review the client's goals and profile, then compare the fund with its peer group, its relevant benchmark and its beta, check ratings, and look at the long-term record."
  ]
 ],
 "drills": [
  {
   "q": "A fund's NAVPS was $19.50 at the start of the year and $21.50 at the end. Assuming dividends were reinvested and there were no additions or withdrawals, what was the gain? (%, 2 dp)",
   "a": 10.26,
   "tol": 0.01,
   "unit": "%",
   "dp": 2,
   "hint": "Divide the change by the beginning NAVPS.",
   "steps": [
    "Change = $21.50 − $19.50 = $2.00",
    "Gain = $2.00 ÷ $19.50 × 100 = 10.26%"
   ],
   "src": "textbook p.14-6"
  },
  {
   "q": "A fund's NAVPS fell from $24.00 to $22.20 over the evaluation period. What was the gain (loss)? (%, 2 dp; enter a loss as a negative number)",
   "a": -7.5,
   "tol": 0.01,
   "unit": "%",
   "dp": 2,
   "hint": "Same formula; the change is negative.",
   "steps": [
    "Change = $22.20 − $24.00 = −$1.80",
    "Gain = −$1.80 ÷ $24.00 × 100 = −7.50%"
   ],
   "src": "variant"
  },
  {
   "q": "A fund started the year at a NAVPS of $15.00 and gained 8% (dividends reinvested, no additions or withdrawals). What was the ending NAVPS? ($, 2 dp)",
   "a": 16.2,
   "tol": 0.01,
   "unit": "$",
   "dp": 2,
   "hint": "Ending = Beginning × (1 + gain).",
   "steps": [
    "Ending NAVPS = $15.00 × (1 + 0.08)",
    "= $15.00 × 1.08 = $16.20"
   ],
   "src": "variant"
  },
  {
   "q": "A fund ended the year at a NAVPS of $13.80 after a 15% gain. What was the beginning NAVPS? ($, 2 dp)",
   "a": 12,
   "tol": 0.01,
   "unit": "$",
   "dp": 2,
   "hint": "Divide by (1 + gain). Do not take 15% off the ending value.",
   "steps": [
    "Beginning NAVPS = $13.80 ÷ 1.15 = $12.00",
    "Check: ($13.80 − $12.00) ÷ $12.00 = 15%",
    "Wrong path: $13.80 × 0.85 = $11.73"
   ],
   "src": "variant"
  },
  {
   "q": "Fund DEF had an average return of 6%, a standard deviation of 5%, and the average risk-free return was 1%. What is its Sharpe ratio? (2 dp)",
   "a": 1,
   "tol": 0.01,
   "unit": "",
   "dp": 2,
   "hint": "Excess return ÷ standard deviation.",
   "steps": [
    "Excess return = 6 − 1 = 5",
    "Sharpe = 5 ÷ 5 = 1.00"
   ],
   "src": "textbook p.14-6"
  },
  {
   "q": "A balanced fund returned 9.5% with a standard deviation of 6%. The average three-month T-bill rate over the period was 2%. What is the Sharpe ratio? (2 dp)",
   "a": 1.25,
   "tol": 0.01,
   "unit": "",
   "dp": 2,
   "hint": "Subtract the T-bill rate first, then divide.",
   "steps": [
    "Excess return = 9.5 − 2 = 7.5",
    "Sharpe = 7.5 ÷ 6 = 1.25"
   ],
   "src": "variant"
  },
  {
   "q": "A fund returned 1.5% with a standard deviation of 4%, while the average risk-free rate was 3%. What is the Sharpe ratio? (2 dp; may be negative)",
   "a": -0.375,
   "tol": 0.01,
   "unit": "",
   "dp": 2,
   "hint": "The excess return is negative.",
   "steps": [
    "Excess return = 1.5 − 3 = −1.5",
    "Sharpe = −1.5 ÷ 4 = −0.375 ≈ −0.38",
    "Negative: the fund earned less than the risk-free rate"
   ],
   "src": "variant"
  },
  {
   "q": "Funds A and B both returned 7%. A's standard deviation is 5% and B's is 10%. If the risk-free rate is 2%, what is Fund B's Sharpe ratio? (2 dp)",
   "a": 0.5,
   "tol": 0.01,
   "unit": "",
   "dp": 2,
   "hint": "Same numerator for both funds; B has double the denominator.",
   "steps": [
    "Fund B: (7 − 2) ÷ 10 = 0.50",
    "Fund A for comparison: (7 − 2) ÷ 5 = 1.00, twice B's"
   ],
   "src": "variant"
  },
  {
   "q": "A client wants a fund with a Sharpe ratio of at least 0.8. The candidate fund's standard deviation is 10% and the risk-free rate is 2.5%. What return must the fund earn to reach exactly 0.8? (%, 2 dp)",
   "a": 10.5,
   "tol": 0.01,
   "unit": "%",
   "dp": 2,
   "hint": "Rearrange: Rp = Rf + Sharpe × σ.",
   "steps": [
    "Required excess return = 0.8 × 10 = 8",
    "Rp = 2.5 + 8 = 10.50%"
   ],
   "src": "variant"
  },
  {
   "q": "A fund returned 11% with a Sharpe ratio of 0.5 when the risk-free rate was 3%. What was its standard deviation? (%, 2 dp)",
   "a": 16,
   "tol": 0.01,
   "unit": "%",
   "dp": 2,
   "hint": "Rearrange: σ = (Rp − Rf) ÷ Sharpe.",
   "steps": [
    "Excess return = 11 − 3 = 8",
    "σ = 8 ÷ 0.5 = 16.00%"
   ],
   "src": "variant"
  },
  {
   "q": "A Canadian Equity Balanced Fund universe contains 872 funds. How many funds are in each quartile?",
   "a": 218,
   "tol": 0,
   "unit": "",
   "dp": 0,
   "hint": "Quartiles are four equal parts.",
   "steps": [
    "872 ÷ 4 = 218",
    "1st quartile = top 218; 4th = bottom 218"
   ],
   "src": "textbook p.14-10"
  },
  {
   "q": "In that 872-fund universe, a fund ranks 300th (1 = best). In which quartile is it? (enter 1, 2, 3 or 4)",
   "a": 2,
   "tol": 0,
   "unit": "",
   "dp": 0,
   "hint": "Find the boundaries: 218, 436, 654.",
   "steps": [
    "1st quartile = ranks 1–218",
    "2nd quartile = ranks 219–436",
    "300 falls in the 2nd quartile"
   ],
   "src": "variant"
  },
  {
   "q": "Survivorship illustration: a manager ranks 50th of 100 funds. The 20 worst-performing funds then close and drop out of the universe, and the manager is still 50th. In which quartile is the manager now? (enter 1, 2, 3 or 4)",
   "a": 3,
   "tol": 0,
   "unit": "",
   "dp": 0,
   "hint": "Recompute the quartile size for the surviving universe.",
   "steps": [
    "Before: 100 ÷ 4 = 25 per quartile; 50th = last place in the 2nd quartile",
    "After: 80 survivors ÷ 4 = 20 per quartile; boundaries 20 / 40 / 60 / 80",
    "50th falls in 41–60, the 3rd quartile. Same performance, lower rank"
   ],
   "src": "variant"
  },
  {
   "q": "An investor allocates 10% of a portfolio to gold mutual funds that are holding 50% of their assets in cash. What is the actual gold allocation? (%, 2 dp)",
   "a": 5,
   "tol": 0.01,
   "unit": "%",
   "dp": 2,
   "hint": "Only the non-cash part of the fund is in gold.",
   "steps": [
    "Gold share of the fund = 1 − 0.50 = 0.50",
    "Actual gold = 10% × 0.50 = 5.00%"
   ],
   "src": "textbook p.14-9"
  },
  {
   "q": "A client puts 15% of her portfolio into a precious-metals fund that currently holds 40% cash. What is her actual precious-metals exposure? (%, 2 dp)",
   "a": 9,
   "tol": 0.01,
   "unit": "%",
   "dp": 2,
   "hint": "Multiply by the invested share, not the cash share.",
   "steps": [
    "Invested share = 1 − 0.40 = 0.60",
    "Actual exposure = 15% × 0.60 = 9.00%"
   ],
   "src": "variant"
  },
  {
   "q": "A manager reports a 5% return while the fund's benchmark returned −4% over the same period. By how many percentage points did the manager beat the benchmark?",
   "a": 9,
   "tol": 0.01,
   "unit": "%",
   "dp": 2,
   "hint": "Subtracting a negative number adds it.",
   "steps": [
    "Relative performance = 5 − (−4)",
    "= +9 percentage points: superior performance"
   ],
   "src": "textbook p.14-5"
  },
  {
   "q": "A portfolio's IPS benchmark is the T-bill rate plus 4%. The T-bill rate averaged 2.75% and the portfolio returned 5.9%. By how much did the portfolio beat (+) or trail (−) its benchmark? (percentage points, 2 dp)",
   "a": -0.85,
   "tol": 0.01,
   "unit": "%",
   "dp": 2,
   "hint": "Build the benchmark first, then subtract.",
   "steps": [
    "Benchmark = 2.75% + 4% = 6.75%",
    "Relative = 5.9 − 6.75 = −0.85 points: underperformed"
   ],
   "src": "variant"
  }
 ],
 "quiz": [
  [
   "A fund's NAVPS was $19.50 at the beginning of the year and $21.50 at the end. Using the textbook's performance formula, the gain is:",
   [
    "9.30%",
    "10.26%",
    "2.00%",
    "110.26%"
   ],
   1,
   "($21.50 − $19.50) ÷ $19.50 × 100 = 10.26%. 9.30% divides by the ending NAVPS ($2.00 ÷ $21.50), the wrong base. 2.00% reports the dollar change as a percentage. 110.26% is ending ÷ beginning without subtracting the starting value.",
   {
    "t": "calc",
    "d": 1
   }
  ],
  [
   "A fund's NAVPS rose from $32.00 to $35.20 over the evaluation period. Assuming reinvested dividends and no additions or withdrawals, its gain was:",
   [
    "9.09%",
    "3.20%",
    "10.00%",
    "110.00%"
   ],
   2,
   "($35.20 − $32.00) ÷ $32.00 × 100 = $3.20 ÷ $32.00 × 100 = 10.00%. 9.09% divides by the ending NAVPS. 3.20% treats the $3.20 dollar change as a percentage. 110.00% is the ratio of ending to beginning NAVPS.",
   {
    "t": "calc",
    "d": 2
   }
  ],
  [
   "A fund's NAVPS fell from $25.00 to $21.00 during the year. Its gain (loss) for the year was:",
   [
    "−19.05%",
    "−16.00%",
    "−4.00%",
    "+16.00%"
   ],
   1,
   "($21.00 − $25.00) ÷ $25.00 × 100 = −$4.00 ÷ $25.00 × 100 = −16.00%. −19.05% divides by the ending NAVPS ($4.00 ÷ $21.00). +16.00% drops the sign. −4.00% reports the dollar change as a percentage.",
   {
    "t": "calc",
    "d": 2
   }
  ],
  [
   "A fund began the year with a NAVPS of $18.40 and gained 12.5% (dividends reinvested, no additions or withdrawals). Its ending NAVPS was:",
   [
    "$20.70",
    "$21.03",
    "$2.30",
    "$30.90"
   ],
   0,
   "Ending = $18.40 × 1.125 = $20.70. $21.03 divides by (1 − 0.125) instead of multiplying by (1 + 0.125). $2.30 is only the dollar gain (12.5% of $18.40). $30.90 adds 12.5 as if it were dollars.",
   {
    "t": "calc",
    "d": 2
   }
  ],
  [
   "A fund ended the year with a NAVPS of $27.60 after a gain of 15%. What was the NAVPS at the start of the year?",
   [
    "$24.00",
    "$23.46",
    "$31.74",
    "$3.60"
   ],
   0,
   "Beginning = $27.60 ÷ 1.15 = $24.00 (check: $3.60 ÷ $24.00 = 15%). $23.46 takes 15% off the ending value ($27.60 × 0.85), which applies the percentage to the wrong base. $31.74 grows the ending value by another 15%. $3.60 is the dollar gain, which answers a different question.",
   {
    "t": "calc",
    "d": 3
   }
  ],
  [
   "A fund earned 11% with a standard deviation of 4%. The average three-month T-bill rate was 3%. Its Sharpe ratio is:",
   [
    "2.75",
    "2.00",
    "2.67",
    "0.50"
   ],
   1,
   "(11 − 3) ÷ 4 = 8 ÷ 4 = 2.00. 2.75 ignores the risk-free rate (11 ÷ 4). 0.50 inverts the ratio (4 ÷ 8). 2.67 divides the excess return by the risk-free rate instead of by the standard deviation (8 ÷ 3).",
   {
    "t": "calc",
    "d": 2
   }
  ],
  [
   "Fund DEF had an average return of 6%, a standard deviation of 5%, and an average risk-free return of 1%. Its Sharpe ratio is:",
   [
    "1.2",
    "1.0",
    "0.2",
    "0.8"
   ],
   1,
   "(6 − 1) ÷ 5 = 1.0, the textbook's own example. 1.2 forgets to subtract Rf (6 ÷ 5). 0.2 divides first and subtracts afterwards (6 ÷ 5 − 1). 0.8 uses σ minus Rf as the numerator ((5 − 1) ÷ 5), mixing up return and risk.",
   {
    "t": "calc",
    "d": 1
   }
  ],
  [
   "The risk-free rate is 2%. Fund X returned 12% with a standard deviation of 10%; Fund Y returned 9% with a standard deviation of 5%. Which fund had the better risk-adjusted return?",
   [
    "Fund Y, with a Sharpe ratio of 1.40",
    "Fund X, with a Sharpe ratio of 1.20",
    "Fund X, because its return is 3 points higher",
    "Fund Y, with a Sharpe ratio of 1.80"
   ],
   0,
   "X: (12 − 2) ÷ 10 = 1.00. Y: (9 − 2) ÷ 5 = 1.40. Y earned more excess return per unit of risk. 1.20 for X and 1.80 for Y both come from ignoring the risk-free rate (12 ÷ 10, 9 ÷ 5). Choosing X for its higher raw return ignores risk, which is the whole point of the Sharpe ratio.",
   {
    "t": "calc",
    "d": 3
   }
  ],
  [
   "A fund returned 2% with a standard deviation of 6%, while the average risk-free rate was 3.5%. Its Sharpe ratio is:",
   [
    "0.25",
    "−0.25",
    "0.33",
    "−1.50"
   ],
   1,
   "(2 − 3.5) ÷ 6 = −1.5 ÷ 6 = −0.25. A negative ratio means the fund earned less than the risk-free rate. 0.25 drops the negative sign. 0.33 ignores Rf (2 ÷ 6). −1.50 is the excess return without dividing by the standard deviation.",
   {
    "t": "calc",
    "d": 2
   }
  ],
  [
   "An advisor wants a fund with a Sharpe ratio of 0.6. The fund's standard deviation is 15% and the risk-free rate is 3%. What return must the fund earn?",
   [
    "9%",
    "28%",
    "6%",
    "12%"
   ],
   3,
   "Rp = Rf + Sharpe × σ = 3 + 0.6 × 15 = 3 + 9 = 12%. 9% is the required excess return only (the risk-free rate was never added back). 6% subtracts Rf instead of adding it (9 − 3). 28% divides σ by the Sharpe ratio (15 ÷ 0.6 = 25) and then adds Rf.",
   {
    "t": "calc",
    "d": 3
   }
  ],
  [
   "A fund returned 9% and has a Sharpe ratio of 0.75. The risk-free rate was 3%. What was the fund's standard deviation?",
   [
    "12%",
    "8%",
    "16%",
    "4.5%"
   ],
   1,
   "σ = (Rp − Rf) ÷ Sharpe = (9 − 3) ÷ 0.75 = 8%. 12% ignores Rf (9 ÷ 0.75). 4.5% multiplies the excess return by the ratio (6 × 0.75) instead of dividing. 16% adds Rf instead of subtracting it ((9 + 3) ÷ 0.75).",
   {
    "t": "calc",
    "d": 3
   }
  ],
  [
   "A Canadian equity peer group contains 1,236 funds. How many funds are in each quartile?",
   [
    "25",
    "618",
    "412",
    "309"
   ],
   3,
   "Quartiles are four equal parts: 1,236 ÷ 4 = 309. 25 applies only to a 100-fund universe; the textbook stresses that a peer group can be any size. 412 divides by 3, and 618 divides by 2 (halves, not quartiles).",
   {
    "t": "calc",
    "d": 1
   }
  ],
  [
   "A peer group has 480 funds, ranked from 1 (highest return) to 480. A fund ranked 245th falls in which quartile?",
   [
    "3rd quartile",
    "2nd quartile",
    "1st quartile",
    "4th quartile"
   ],
   0,
   "Quartile size = 480 ÷ 4 = 120, so the boundaries are 120, 240, 360 and 480. Rank 245 is between 241 and 360: the 3rd quartile. Choosing the 2nd quartile comes from rounding 245 to &ldquo;about the middle&rdquo; or numbering quartiles from the bottom. The median is rank 240, so 245 is just below it.",
   {
    "t": "calc",
    "d": 3
   }
  ],
  [
   "A manager ranks exactly 50th out of 100 funds. Over the following years the 20 worst funds are terminated and drop out of the universe. If the manager is still ranked 50th, in which quartile does the manager now fall?",
   [
    "1st quartile",
    "3rd quartile",
    "2nd quartile",
    "4th quartile"
   ],
   1,
   "With 80 survivors, each quartile holds 20 funds (boundaries 20/40/60/80), so 50th falls in the 3rd quartile. Before, it was the last place in the 2nd quartile (26–50). Keeping the 2nd quartile uses the old 25-fund quartiles. This is survivorship bias: a median manager ranks lower as failed funds drop out.",
   {
    "t": "calc",
    "d": 3
   }
  ],
  [
   "A client wants 12% of her portfolio in precious metals and buys a precious-metals fund that is holding 40% of its assets in cash. Her actual precious-metals exposure is:",
   [
    "7.2%",
    "4.8%",
    "12.0%",
    "16.8%"
   ],
   0,
   "Actual exposure = 12% × (1 − 0.40) = 7.2%. 4.8% multiplies by the cash share (12% × 0.40) instead of the invested share. 12.0% assumes the label matches the holdings. 16.8% adds the cash share (12% × 1.40). This is the textbook's gold example: 10% in funds holding 50% cash = 5% in gold.",
   {
    "t": "calc",
    "d": 2
   }
  ],
  [
   "A portfolio's investment policy statement sets its benchmark at the T-bill rate plus 4%. The T-bill rate averaged 3.2% and the portfolio returned 6.5%. Relative to its benchmark, the portfolio:",
   [
    "Outperformed by 3.3 percentage points",
    "Underperformed by 0.7 percentage points",
    "Outperformed by 2.5 percentage points",
    "Outperformed by 0.7 percentage points"
   ],
   1,
   "Benchmark = 3.2% + 4% = 7.2%; 6.5% − 7.2% = −0.7, so it underperformed by 0.7 points. +3.3 compares the return with the T-bill rate alone and forgets the 4% margin. +2.5 compares it with the 4% margin alone. +0.7 has the right size but the wrong sign.",
   {
    "t": "calc",
    "d": 3
   }
  ],
  [
   "Over the same year, four managers reported these results. Which manager added the most value relative to the stated benchmark?",
   [
    "Manager 1: 5% return; benchmark −4%",
    "Manager 2: 10% return; benchmark 20%",
    "Manager 3: 12% return; peer average 9%",
    "Manager 4: 15% return; benchmark 8%"
   ],
   0,
   "Relative performance = return − benchmark: Manager 1 +9 points, Manager 2 −10, Manager 3 +3, Manager 4 +7. Manager 4 has the highest raw return, which is the trap: returns mean little until compared with a benchmark. Manager 2's 10% was poor because the benchmark returned 20%.",
   {
    "t": "calc",
    "d": 2
   }
  ],
  [
   "The risk-free rate is 3%. Fund P returned 14% with a standard deviation of 8%; Fund Q returned 8% with a standard deviation of 4%. Which fund delivered the better risk-adjusted return?",
   [
    "Fund P, with a Sharpe ratio of 1.38",
    "Fund Q, with a Sharpe ratio of 2.00",
    "Fund Q, with a Sharpe ratio of 1.25",
    "Fund Q, since its risk is half of Fund P's"
   ],
   0,
   "P: (14 − 3) ÷ 8 = 1.375 ≈ 1.38. Q: (8 − 3) ÷ 4 = 1.25. P wins. Ignoring the risk-free rate reverses the answer: Q's 8 ÷ 4 = 2.00 beats P's 14 ÷ 8 = 1.75. Choosing Q for its lower risk ignores how much more excess return P earned. Lower risk does not automatically mean a better Sharpe ratio.",
   {
    "t": "calc",
    "d": 3
   }
  ],
  [
   "Barry's emerging markets equity fund lost money over the past 12 months, and he wants to sell it. His rep finds that the fund beat 90% of its peers, lost less than the MSCI Emerging Markets index, has a beta of 0.8 and a 5-star Morningstar rating. What is the most appropriate conclusion?",
   [
    "The fund underperformed, because its absolute return was negative",
    "The fund is too volatile, because its beta is below 1",
    "The fund should be compared against the S&amp;P/TSX Composite instead",
    "The fund performed well relative to its peers, its benchmark and its risk"
   ],
   3,
   "This is the textbook case study: despite a negative return, the fund outperformed 90% of peers, beat its benchmark, was less volatile than the index (beta 0.8, below 1) and earned 5 stars. Judging by absolute return alone is the mistake Barry made. A beta below 1 means <em>less</em> volatile than the index, not more.",
   {
    "t": "scenario",
    "d": 2
   }
  ],
  [
   "A rep is assessing a U.S. equity mutual fund. Which benchmark index is most appropriate?",
   [
    "S&amp;P/TSX Composite Index",
    "MSCI EAFE Index",
    "MSCI World ESG Leaders Index",
    "S&amp;P 500 Index"
   ],
   3,
   "Table 14.1 pairs the S&amp;P 500 (the 500 largest publicly held companies trading on U.S. markets) with U.S. equity funds. The S&amp;P/TSX Composite is for Canadian equity funds. MSCI EAFE covers non-North American markets, so it excludes the U.S. MSCI World ESG Leaders is for global ESG funds.",
   {
    "t": "scenario",
    "d": 1
   }
  ],
  [
   "A client holds a fund that invests in European, Australian and Japanese stocks. Which benchmark should her rep use to assess it?",
   [
    "S&amp;P 500 Index",
    "MSCI EAFE Index",
    "MSCI World ESG Leaders Index",
    "S&amp;P/TSX 60 Index"
   ],
   1,
   "MSCI EAFE (Europe, Australasia, Far East) is the benchmark for non-North American equity funds. The S&amp;P 500 covers U.S. stocks, and the S&amp;P/TSX 60 covers Canadian large-caps. MSCI World ESG Leaders is a global ESG index, used only for global ESG funds.",
   {
    "t": "scenario",
    "d": 2
   }
  ],
  [
   "A rep needs a benchmark for a client's money market fund. Which index fits?",
   [
    "FTSE Canada Universe Bond Index",
    "FTSE Canada 91-Day T-Bill Index",
    "S&amp;P/TSX Composite Index",
    "MSCI Canada ESG Leaders Index"
   ],
   1,
   "The FTSE Canada 91-Day T-Bill Index measures the return of 91-day Canadian Treasury bills. It is used for money market funds and for the cash component of a portfolio. The Universe Bond Index is for Canadian bond funds, which hold longer-term government and corporate bonds.",
   {
    "t": "scenario",
    "d": 1
   }
  ],
  [
   "A rep is evaluating a fund that holds large- and mid-cap Canadian companies chosen for strong ESG ratings. Which benchmark does the textbook pair with it?",
   [
    "S&amp;P/TSX 60 Index",
    "MSCI World ESG Leaders Index",
    "MSCI Canada ESG Leaders Index",
    "S&amp;P/TSX Composite Index"
   ],
   2,
   "Table 14.1: MSCI Canada ESG Leaders (large- and mid-cap Canadian companies with strong ESG ratings) is the benchmark for Canadian ESG funds. MSCI World ESG Leaders is for global ESG funds. The two S&amp;P/TSX indexes are for conventional Canadian equity and large-cap equity funds.",
   {
    "t": "scenario",
    "d": 2
   }
  ],
  [
   "A rep compares a Canadian equity fund's one-year return with the S&amp;P/TSX Composite Index's three-year annual return and concludes that the fund underperformed. What is wrong with the analysis?",
   [
    "The fund should have been compared with a bond index",
    "One-year returns cannot be measured using NAVPS",
    "The S&amp;P/TSX Composite is only for large-cap funds",
    "The periods differ, so the comparison is irrelevant"
   ],
   3,
   "A fund must be compared with its benchmark over the same time period; otherwise the analysis is irrelevant. The S&amp;P/TSX Composite is the correct index for Canadian equity funds (the TSX 60 is the large-cap one). A bond index would be irrelevant for an equity fund.",
   {
    "t": "scenario",
    "d": 2
   }
  ],
  [
   "A client points out that his fixed-income fund returned 4% while a friend's growth equity fund returned 14%, and asks to switch. According to the textbook, what is the main flaw in his comparison?",
   [
    "It compares two dissimilar funds with different objectives and risk",
    "It ignores the funds' Morningstar star ratings",
    "It uses one-year rather than five-year quartile rankings",
    "It should compare NAVPS rather than total returns"
   ],
   0,
   "The textbook says to avoid comparing dissimilar funds, its own example being a fixed-income fund vs. a growth equity fund, or funds with differing objectives or degrees of risk acceptance. The other points might add information, but they do not fix the basic mismatch.",
   {
    "t": "scenario",
    "d": 2
   }
  ],
  [
   "A client invested $20,000 in a fund in January and added $15,000 in July. The rep computes the year's return as (Ending NAVPS − Beginning NAVPS) ÷ Beginning NAVPS. What caveat applies?",
   [
    "The formula must use the ending NAVPS as its base",
    "The result must be adjusted by the fund's beta",
    "The return may be inaccurate because money was added",
    "The calculation is valid only for money market funds"
   ],
   2,
   "The NAVPS method assumes no additions to or withdrawals from the portfolio during the period. If funds were added or withdrawn, the return calculated this way may be inaccurate. The base is always the beginning NAVPS. Beta plays no part in the calculation.",
   {
    "t": "scenario",
    "d": 2
   }
  ],
  [
   "A client wants to buy a fund because it ranked in the 1st quartile last year. Its earlier rankings were 4th, 3rd and 4th. What is the rep's best response, based on the textbook?",
   [
    "Buy, since a 1st-quartile rank shows top-25% performance",
    "Buy, since the fund is clearly improving its long-term record",
    "Caution that one-year ranks are volatile and consistency matters",
    "Caution that 1st-quartile funds usually fall to 4th the next year"
   ],
   2,
   "The textbook warns against putting much weight on short-term quartile rankings such as one-year returns, because they are more volatile. Consistent performers should rank higher in choice than volatile ones. Nothing in the text says 1st-quartile funds usually drop to 4th, and one good year does not establish a long-term trend.",
   {
    "t": "scenario",
    "d": 2
   }
  ],
  [
   "A rep ranks a small-cap equity fund against a universe of all equity funds, even though small-cap managers have different risk characteristics from the universe as a whole. Which drawback of the comparison universe does this illustrate?",
   [
    "Survivorship bias",
    "Matching of risk profiles",
    "Universe size",
    "Investment policy mismatch"
   ],
   1,
   "Small-cap managers have different risk characteristics than a general equity universe, so a universe that does not match for risk is not representative. Survivorship bias concerns failed funds dropping out. Universe size concerns universes too small to be reliable. &ldquo;Investment policy mismatch&rdquo; is not one of the four drawbacks.",
   {
    "t": "scenario",
    "d": 2
   }
  ],
  [
   "A balanced fund is compared with a &ldquo;balanced&rdquo; universe that includes mostly-equity funds and bond funds with small stock positions. Which drawback from Table 14.2 does this illustrate?",
   [
    "Survivorship bias",
    "Universe size",
    "Definition of universes",
    "Benchmark relevance"
   ],
   2,
   "The textbook's own example: a balanced universe may hold incomparable portfolios, from equity-based funds with a modest bond component to bond funds with small stock exposure. Universes defined too broadly or too variably are not comparable. Universe size is about universes that are too small. Benchmark relevance is about indexes, not peer universes.",
   {
    "t": "scenario",
    "d": 3
   }
  ],
  [
   "A fund manager ranks in the top half of Morningstar's Canadian equity universe but in the bottom half of a competing firm's universe for the same period. What best explains this?",
   [
    "One of the firms has used the wrong period",
    "The fund's beta changed between the two reports",
    "The manager changed the fund's mandate mid-period",
    "The appraisal firms construct their universes differently"
   ],
   3,
   "The textbook states that appraisal firms and analysts each have their own methods of universe construction and compilation. The differences are large enough for a manager to rank in the top half of one universe and the bottom half of a competitor's. Nothing in the scenario suggests an error or a mandate change.",
   {
    "t": "scenario",
    "d": 3
   }
  ],
  [
   "An investor's &ldquo;Canadian equity&rdquo; fund holds a significant portion of its assets in U.S. stocks. When comparing its published results with other Canadian equity funds, what should the rep keep in mind?",
   [
    "The comparison may be apples with oranges",
    "The manager has breached the fund's mandate",
    "The fund should be benchmarked to the S&amp;P 500",
    "The fund's quartile rank is no longer reported"
   ],
   0,
   "A fund's name or class may not reflect its actual asset base. The textbook says this does not mean the manager is doing anything wrong, since managers adjust timing to market trends. It does mean published results may compare apples with oranges. The fund is still classified and benchmarked as Canadian equity.",
   {
    "t": "scenario",
    "d": 3
   }
  ],
  [
   "Measures used to quantify a fund's volatility include all of the following EXCEPT:",
   [
    "Beta",
    "The number of calendar years it has lost money",
    "Its quartile ranking within its peer group",
    "Its best and worst 12-month periods"
   ],
   2,
   "The five volatility measures are: standard deviation, beta, the number of calendar years the fund lost money, its best and worst 12-month periods, and its worst annual, quarterly or monthly losses. A quartile ranking measures relative <em>return</em> against peers, not volatility.",
   {
    "t": "except",
    "d": 2
   }
  ],
  [
   "The textbook lists four drawbacks of the comparison universe method. Which of the following is NOT one of them?",
   [
    "Definition of universes",
    "Matching of risk profiles",
    "Survivorship bias",
    "Reliance on a single market index"
   ],
   3,
   "Table 14.2 lists definition of universes, matching of risk profiles, universe size and survivorship bias. Reliance on a market index describes the <em>other</em> method, benchmark indexes, so it cannot be a drawback of the peer-group method.",
   {
    "t": "except",
    "d": 2
   }
  ],
  [
   "A measure used to compare fund performance should do all of the following EXCEPT:",
   [
    "Identify superior, ordinary and inferior performance",
    "Avoid requiring manipulation, if it is fundamentally sound",
    "Produce the same ranking at every appraisal firm",
    "Be sufficiently realistic to be useful in practice"
   ],
   2,
   "The three standards are: identify superior, ordinary and inferior performance; not require manipulation (assuming the measure is fundamentally sound); and be sufficiently realistic to be useful in practice. The textbook actually notes that rankings differ between appraisal firms because each builds its universes differently.",
   {
    "t": "except",
    "d": 3
   }
  ],
  [
   "Which statement about survivorship bias is FALSE?",
   [
    "It arises as defunct funds drop out of the rankings",
    "It makes median managers look worse over longer periods",
    "It exists because terminated funds tend to be unsuccessful",
    "It can be eliminated if a universe is carefully built"
   ],
   3,
   "The textbook says all comparison universes show some degree of survivorship bias, no matter how carefully they are constructed, so it cannot be eliminated. The other statements are correct: defunct funds drop out, terminated funds are usually unsuccessful, and median managers rank increasingly lower over 3-, 5- and 10-year periods.",
   {
    "t": "except",
    "d": 3
   }
  ],
  [
   "Which statement about the Sharpe ratio is FALSE?",
   [
    "It subtracts the risk-free rate from the portfolio's return",
    "A positive value means the return beat the risk-free return",
    "Its risk-free rate is typically the three-month T-bill average",
    "It uses beta as its measure of the portfolio's risk"
   ],
   3,
   "The Sharpe ratio measures risk-adjusted return using <b>standard deviation</b> as the risk measure: Sp = (Rp − Rf) ÷ σp. Beta is a separate volatility measure (volatility relative to the market) and is not part of the formula. The other three statements come directly from the textbook.",
   {
    "t": "except",
    "d": 2
   }
  ],
  [
   "Each of the following benchmark pairings matches Table 14.1 EXCEPT:",
   [
    "MSCI EAFE: non-North American equity funds",
    "S&amp;P 500: U.S. equity funds",
    "S&amp;P/TSX 60: Canadian small-cap equity funds",
    "FTSE Canada Universe Bond Index: Canadian bond funds"
   ],
   2,
   "The S&amp;P/TSX 60 tracks the 60 <em>largest</em> TSX companies by market capitalization and is the benchmark for Canadian <b>large-cap</b> equity funds. Table 14.1 has no small-cap benchmark. The other three pairings are as listed in the table.",
   {
    "t": "except",
    "d": 2
   }
  ],
  [
   "What is the key difference between performance measurement and performance assessment?",
   [
    "Measurement uses NAVPS; assessment uses only the Sharpe ratio",
    "Measurement is done by appraisal firms; assessment by the fund manager",
    "Measurement calculates a return; assessment compares it with a benchmark",
    "Measurement covers one year; assessment covers at least five years"
   ],
   2,
   "Performance measurement calculates the return realized over a specified evaluation period. Performance assessment compares that result with an established, reliable benchmark (an index or a comparison universe) to judge whether it was comparatively good. Neither term is tied to a particular tool, party or length of period.",
   {
    "t": "concept",
    "d": 3
   }
  ],
  [
   "According to the textbook, why should investors focus primarily on longer-term results when comparing funds?",
   [
    "Long-term returns are always higher than short-term returns",
    "They best measure a manager's ability over the business cycle",
    "Short-term returns cannot be calculated using NAVPS",
    "Appraisal firms report only long-term results"
   ],
   1,
   "Longer-term results best measure a manager's ability in all phases of the business cycle. Consistency of results and the trend over the last few measurement periods also matter. Nothing in the text says long-term returns are always higher.",
   {
    "t": "concept",
    "d": 1
   }
  ],
  [
   "Funds A and B both returned 7% over the past 12 months. Fund A's standard deviation was 5% and Fund B's was 10%. What is the textbook's conclusion?",
   [
    "Fund B needed twice the risk to earn the same return",
    "Fund B performed better, since it took more risk",
    "The funds performed equally, since their returns were equal",
    "Fund A will outperform Fund B next year"
   ],
   0,
   "For the same 7% return, B's standard deviation was twice A's, so B took twice the risk. Comparing returns without factoring in risk is not enough. Taking more risk for the same return is worse, not better. The textbook makes no prediction about next year.",
   {
    "t": "concept",
    "d": 1
   }
  ],
  [
   "A fund has a positive Sharpe ratio. What does this tell you, according to the textbook?",
   [
    "Its return beat its benchmark index",
    "Its average return exceeded the average risk-free return",
    "It was less volatile than the market",
    "It ranked in the top half of its peer group"
   ],
   1,
   "The textbook says a positive Sharpe ratio means the fund had an average return greater than the average risk-free return. The numerator (Rp − Rf) is positive. The Sharpe ratio does not compare the fund with a benchmark index or peers, and lower volatility than the market is what a beta below 1 shows.",
   {
    "t": "concept",
    "d": 2
   }
  ],
  [
   "A fund's beta relative to its benchmark is 0.8. This means the fund:",
   [
    "Was riskier than its relevant index",
    "Returned 80% of its benchmark's return",
    "Was less volatile than its relevant index",
    "Beat 80% of its peer group"
   ],
   2,
   "Beta measures how much more or less volatile a fund is than the underlying market it invests in. The case study states that a beta of 0.8 means the fund was less volatile than the relevant index. Beta is not a return ratio or a peer ranking; the case study fund separately beat 90% of its peers.",
   {
    "t": "concept",
    "d": 1
   }
  ],
  [
   "One fund earned a steady 5% a year for 20 years; another swung between −20% and +20% over the same 20 years. What does the textbook conclude?",
   [
    "Both are equally likely to earn 5% next year",
    "The steady fund is guaranteed to earn 5% next year",
    "The volatile fund is much less likely to earn 5% next year",
    "The volatile fund has the lower standard deviation"
   ],
   2,
   "The steady fund has the lower standard deviation, and it is reasonable, though not guaranteed, to expect it to keep earning about 5%. The volatile fund is much less likely to earn 5% next year. A higher standard deviation means more volatile, less predictable returns.",
   {
    "t": "concept",
    "d": 2
   }
  ],
  [
   "Why does survivorship bias make an average manager look worse over a 10-year comparison than over a 3-year comparison?",
   [
    "Failed funds drop out, leaving a stronger surviving universe",
    "Average managers tend to take more risk as time passes",
    "Longer periods include more market downturns",
    "Appraisal firms weight recent years more heavily"
   ],
   0,
   "Defunct funds, usually the unsuccessful ones, drop out and are excluded from later rankings. The longer the period, the more the universe consists of survivors, so a manager with median performance every quarter ranks increasingly lower. The other options describe mechanisms the textbook does not mention.",
   {
    "t": "concept",
    "d": 3
   }
  ],
  [
   "According to the textbook, what is a realistic goal for most fund managers when it comes to quartile rankings?",
   [
    "Ranking in the 1st quartile every year",
    "Avoiding the 4th quartile in at least three of five years",
    "Beating the peer-group median by at least 4% a year",
    "Stable, consistent performance in the top two quartiles"
   ],
   3,
   "First-quartile results every year are very difficult to achieve. Most managers aim for stable and consistent performance in the top two quartiles. The other options set targets that appear nowhere in the text.",
   {
    "t": "concept",
    "d": 2
   }
  ],
  [
   "Why does the textbook warn against putting much weight on one-year quartile rankings?",
   [
    "One-year rankings exclude reinvested dividends",
    "Appraisal firms do not publish one-year data",
    "Quartiles can be calculated only over five years",
    "Shorter-term rankings are more volatile"
   ],
   3,
   "The longer the evaluation period, the more stable the returns of the comparison universe. Shorter-term rankings are more volatile, so consistent performers should rank higher in choice than volatile performers. One-year rankings are published and can be calculated.",
   {
    "t": "concept",
    "d": 2
   }
  ],
  [
   "An investor wants a 10% allocation to gold stocks and buys gold mutual funds for that 10%. According to the textbook, why might the actual allocation differ?",
   [
    "Gold funds must hold half their assets in bonds",
    "Gold funds are benchmarked to the S&amp;P/TSX 60",
    "Gold funds may hold large cash balances at times",
    "Gold funds report returns only on a quarterly basis"
   ],
   2,
   "A fund's formal classification may not match its actual asset composition. The textbook notes gold funds at some points hold 50% of their assets in cash, so a 10% allocation becomes about 5% actual gold. Nothing requires gold funds to hold bonds.",
   {
    "t": "concept",
    "d": 2
   }
  ],
  [
   "A comparison universe for a fund should be made up of funds that:",
   [
    "Are managed by the same fund company",
    "Are tracked by the S&amp;P/TSX Composite Index",
    "Have returned more than the benchmark index",
    "Have similar investment mandates and risk profiles"
   ],
   3,
   "A peer group (comparison or performance universe) consists of funds with similar investment mandates: comparable asset classes and risk profiles. For example, a Canadian large-cap equity fund is compared with all other Canadian large-cap equity funds. Selecting only funds that beat the index would bias the comparison.",
   {
    "t": "concept",
    "d": 2
   }
  ],
  [
   "An investment policy statement is best described as:",
   [
    "A quarterly statement of a client's account holdings",
    "A regulatory filing listing the fund's top ten holdings",
    "An appraisal firm's annual ranking of fund managers",
    "A formal document guiding the overall asset management of a portfolio"
   ],
   3,
   "The textbook defines an investment policy statement as a formal document that guides the overall asset management of a portfolio. Managers are often measured against a predetermined benchmark specified in it, such as the T-bill rate plus 4%.",
   {
    "t": "recall",
    "d": 1
   }
  ],
  [
   "In the Sharpe ratio, the risk-free rate is typically:",
   [
    "The return of the FTSE Canada Universe Bond Index",
    "The Bank of Canada overnight rate at period-end",
    "The average three-month Treasury bill rate over the period",
    "The yield on a five-year GIC at the start of the period"
   ],
   2,
   "The textbook defines Rf as the risk-free rate, typically the average of the three-month Treasury bill rate over the period being measured. A bond index return is not risk-free.",
   {
    "t": "recall",
    "d": 1
   }
  ],
  [
   "Which of the following are given in the textbook as professional performance appraisal firms that build comparison universes?",
   [
    "Morningstar and the Globe and Mail",
    "CIRO and the Canadian Securities Administrators",
    "MSCI and FTSE Russell",
    "S&amp;P Dow Jones and the TSX"
   ],
   0,
   "Comparison universes are built by professional performance appraisal firms such as Morningstar and the Globe and Mail. MSCI, FTSE and S&amp;P produce the benchmark <em>indexes</em> in Table 14.1, not peer universes. CIRO and the CSA are regulators.",
   {
    "t": "recall",
    "d": 2
   }
  ],
  [
   "According to the textbook, the most popular method of relative performance evaluation is:",
   [
    "Comparing the fund's return with the T-bill rate",
    "Comparing the fund's return with its peer group",
    "Calculating the fund's Sharpe ratio",
    "Comparing the fund's beta with 1.0"
   ],
   1,
   "The most popular method of relative performance evaluation is to compare a fund's return with the performance of a peer group: funds with similar investment mandates, also called the comparison or performance universe.",
   {
    "t": "recall",
    "d": 1
   }
  ],
  [
   "According to the textbook, the most frequently used measure of mutual fund performance is:",
   [
    "The fund's quartile ranking within its peer group",
    "The fund's Sharpe ratio over three years",
    "The change in NAVPS from the start to the end of the period",
    "The fund's Morningstar star rating"
   ],
   2,
   "The most frequently used measure compares NAVPS at the beginning and end of a period, expressing the change as a percentage of the initial value and usually assuming all dividends are reinvested. The Sharpe ratio, quartiles and star ratings are used for risk adjustment and relative comparison.",
   {
    "t": "recall",
    "d": 1
   }
  ],
  [
   "Which statement correctly describes the 1st quartile of a peer group?",
   [
    "The top 25% of funds, with the highest returns",
    "The bottom 25% of funds, with the lowest returns",
    "The funds ranked between the 25th and 50th percentile",
    "The funds with the lowest standard deviation"
   ],
   0,
   "The 1st quartile holds the top performers with the highest returns: the top 25 of a 100-fund universe. The 4th quartile holds the worst performers. Quartile rankings are based on returns, not on volatility.",
   {
    "t": "recall",
    "d": 1
   }
  ],
  [
   "Which index is described in the textbook as the benchmark for Canadian large-cap equity funds?",
   [
    "S&amp;P/TSX 60 Index",
    "S&amp;P/TSX Composite Index",
    "MSCI Canada ESG Leaders Index",
    "FTSE Canada Universe Bond Index"
   ],
   0,
   "The S&amp;P/TSX 60 (the 60 largest TSX companies by market capitalization) is the benchmark for Canadian large-cap equity funds. The S&amp;P/TSX Composite (the largest listed TSX equities) is used for Canadian equity funds in general. Confusing the two is a classic exam error.",
   {
    "t": "recall",
    "d": 2
   }
  ]
 ]
};
