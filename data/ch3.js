window.IFC = window.IFC || {};
window.IFC[3] = {
  n: 3,
  section: "Investment Funds in Canada · Section 1 · Chapter 3",
  shortTitle: "Overview of Economics",
  title: "Overview of Economics",
  lede: "The heaviest chapter in Section 1 and the only one with formulas. Six objectives, four numbered lists, two calculations you must be able to run, and a business cycle whose phase-by-phase detail is the single richest source of exam questions in the section.",
  footer: "Distilled from <em>Investment Funds in Canada</em>, Section 1, Chapter 3 (CSI, 2024). Study aid only — not a substitute for the official text.",

  method: {
    title: "How to beat Chapter 3",
    sub: "Directions matter more than definitions here",
    steps: [
      "<b>Learn directions, not just terms.</b> Most of this chapter is cause and effect: rates up → bond prices down; Bank buys bonds → bond prices up → rates fall → money supply expands. The exam tests the <em>arrow</em>. If you can state which way each variable moves, the definitions come free.",
      "<b>Master the business cycle phase by phase.</b> Five phases, each with a list of characteristics. This is the densest testable block in Section 1. Pay special attention to what happens to <b>interest rates, bond prices and stock prices</b> at the <b>peak</b> and at the <b>trough</b> — those two are mirror images and are constantly swapped in distractors.",
      "<b>Memorise the three indicator lists as sets.</b> Leading, coincident, lagging. You will be asked to classify one indicator, so drill the assignments, not the concept. <b>Unemployment is lagging</b> — the most-missed single item in the chapter.",
      "<b>Be able to actually compute two things:</b> the <b>inflation rate</b> from two CPI values, and <b>real GDP growth</b> from nominal growth minus the price change. Both appear as worked examples in the text, which is a strong signal they are testable.",
      "<b>Separate the four unemployment types by cause.</b> Cyclical = the business cycle. Seasonal = the calendar. Frictional = normal turnover, workers <em>have</em> the skills. Structural = workers <em>lack</em> the skills, wrong location, or won't work at the offered wage. The frictional/structural boundary is the classic trap.",
      "<b>Do not confuse the three &ldquo;-flations.&rdquo;</b> Inflation = prices rising. Disinflation = prices <em>still rising</em>, but more slowly. Deflation = prices actually falling, CPI negative year after year. Disinflation is the one people get wrong."
    ],
    flag: {
      label: "Where the marks actually are",
      text: "In rough order of exam weight: <b>business cycle phases</b>, <b>leading/coincident/lagging classification</b>, <b>the four types of unemployment</b>, <b>expansionary vs. contractionary policy in both monetary and fiscal form</b>, and <b>the inflation rate calculation</b>. The balance of payments section is short and comparatively low-yield — learn it last, but do learn the current vs. capital account distinction."
    }
  },

  objectives: [
    {
      tag: "Objective 1",
      title: "Microeconomics, demand and supply, equilibrium",
      blocks: [
        { points: [
          "<b>Economics</b> is a <b>social science</b> concerned with the <b>production, distribution and consumption</b> of goods and services — specifically how consumers, businesses and governments <b>make choices when allocating resources</b> to satisfy their needs.",
          "<b>Microeconomics</b> analyzes the market behaviour of <b>individual consumers and firms</b>, how prices are determined, and how prices determine the production, distribution and use of goods and services.",
          "<b>Macroeconomics</b> focuses on the performance of the <b>economy as a whole</b> — unemployment, inflation, recessions, government spending and taxation, budget deficits, national debts, poverty and inequality.",
          "A <b>market</b> is <b>any arrangement that allows buyers and sellers to conduct business with one another</b>. Decision makers need not meet physically.",
          "<b>Law of Demand:</b> the <b>higher the price, the lower the quantity demanded</b>; the lower the price, the higher the quantity demanded, other factors held constant.",
          "<b>Law of Supply:</b> the <b>higher the price of a good, the greater the quantity supplied</b>.",
          "<b>Equilibrium price</b> = the price that <b>matches what someone is willing to pay with the price at which someone is willing to supply</b> — the one price that balances quantity demanded and quantity supplied."
        ]},
        { table: {
          caption: "The three decision makers",
          head: ["Group", "Objective"],
          rows: [
            ["<b>Consumers</b>", "Maximize their <b>satisfaction or well-being</b> within the limitations of available resources — income from employment, investments or other sources"],
            ["<b>Firms</b>", "Maximize <b>profits</b> by selling goods or services to consumers, governments or other firms"],
            ["<b>Governments</b>", "Spend on education, health care, employment training and the military; oversee regulatory agencies; take part in <b>public works projects</b> (highways, hydro-electric plants, airports)"]
          ]
        }},
        { table: {
          caption: "Table 3.1 — the laptop market (know the equilibrium point)",
          head: ["Price", "Quantity demanded", "Quantity supplied"],
          rows: [
            ["$1,000", "500", "0"],
            ["$1,500", "350", "100"],
            ["<b>$2,000</b>", "<b>200</b>", "<b>200</b>"],
            ["$2,500", "150", "300"],
            ["$3,000", "10", "450"]
          ],
          numCol: 0
        }},
        { flag: {
          label: "The worked example",
          text: "The one price that balances quantity demanded and supplied is <b>$2,000</b>, yielding an <b>equilibrium price of $2,000 and an equilibrium supply of 200 units</b>. If the table appears on the exam with different numbers, you are looking for the row where the two quantity columns are <b>equal</b>."
        }}
      ]
    },
    {
      tag: "Objective 2",
      title: "Gross domestic product",
      blocks: [
        { points: [
          "<b>GDP</b> = the <b>market value of all final goods and services produced within a country in a given time period</b>, usually a year or a quarter.",
          "<b>Economic growth</b> is an economy's ability to produce greater levels of output over time, expressed as the <b>percentage change in GDP</b> over a given period.",
          "A <b>final good</b> is a <b>finished product purchased by the ultimate end user</b>. A <b>computer is a final good; the chip inside it is not</b>, because the chip was used to manufacture the computer. Counting both would <b>overstate</b> GDP.",
          "<b>Quarterly</b> reports track short-term activity; <b>annual</b> reports examine trends and changes in production and the standard of living."
        ]},
        { table: {
          caption: "The three approaches to measuring GDP",
          head: ["Approach", "How it works"],
          rows: [
            ["<b>Expenditure approach</b>", "Adds up everything consumers, businesses and governments spend during a period. Four components: <b>personal consumption (C)</b>, <b>investment (I)</b>, <b>government spending (G)</b>, and <b>net exports (X − M)</b>.<br><b>GDP = C + I + G + (X − M)</b>"],
            ["<b>Income approach</b>", "Total spending on goods and services should <b>equal the total income generated</b> by producing them. GDP is the <b>sum of all income</b> generated by the economic activity."],
            ["<b>Production approach</b>", "Also called the <b>value-added approach</b>. Calculates an industry's output and <b>subtracts the value of all goods and services used to produce the outputs</b>. Example: computer industry produces <b>$5 billion</b> in computers and spends <b>$2 billion</b> on inputs → value added is <b>$3 billion</b>."]
          ]
        }},
        { points: [
          "In theory, GDP measured by the three approaches should be <b>the same</b>.",
          "<b>Nominal GDP</b> = the dollar value of all goods and services produced in a given year <b>at the prices that prevailed in that same year</b>. Typically the figure reported in the financial press. Changes reflect <b>both price changes and output changes</b>.",
          "<b>Real GDP</b> (constant dollar GDP) = valued at <b>prices that prevailed in some base year</b>. Holding prices constant establishes a better measure of the change in the <b>amount of output</b> produced. Differences between real and nominal GDP are <b>entirely the result of changes in prices</b>."
        ]},
        { flag: {
          label: "The calculation they show you — so expect it",
          text: "Nominal GDP grew <b>4.4%</b>, prices rose <b>1.1%</b> → real growth <b>3.3%</b>. Nominal GDP grew <b>2.4%</b>, prices rose <b>3.1%</b> → the economy <b>shrank by about 0.7%</b>. Negative real growth means the nation was <b>less productive</b> than the year before, even though the nominal number was positive."
        }},
        { points: [
          "<b>Growth in GDP results from:</b> increases in <b>population</b> over time; increases in the <b>capital stock</b> (more equipment, better training and education); and improvements in <b>technology</b>.",
          "Sustained growth compounds: a policy that increases annual growth from <b>2% to 3% doubles a nation's standard of living over a 30- to 40-year period</b>.",
          "<b>Capital accumulation alone cannot sustain growth</b> — increased capital eventually leads to smaller and smaller gains in output. A higher savings rate is <b>not responsible for a sustained higher growth rate</b> over very long periods, though it can support a higher <b>level</b> of output per individual.",
          "<b>Sustained growth requires technological progress</b>, associated with basic research, applied research and product development in a supportive entrepreneurial context."
        ]}
      ]
    },
    {
      tag: "Objective 3",
      title: "The business cycle and economic indicators",
      blocks: [
        { points: [
          "Fluctuations in output and employment are called the <b>business cycle</b>. Despite the word &ldquo;cycle,&rdquo; fluctuations are <b>irregular and unpredictable</b> — each cycle is unique.",
          "There are <b>five phases</b>: <b>expansion, peak, contraction, trough, recovery</b>."
        ]},
        { table: {
          caption: "The five phases — memorise the direction of each variable",
          head: ["Phase", "What is happening"],
          rows: [
            ["<b>Expansion</b>", "Inflation is <b>stable</b>. Businesses have adjusted inventories to meet higher demand and are <b>investing in new capacity</b>. Corporate profits <b>rising</b>. New start-ups <b>outnumber bankruptcies</b>; stock market activity <b>strong</b>. Job creation steady; unemployment <b>steady or falling</b>. Overall, <b>real GDP is rising</b>."],
            ["<b>Peak</b>", "Demand begins to <b>outstrip capacity</b>. Labour and product shortages cause <b>wage increases and inflation to rise</b>. <b>Interest rates rise and bond prices fall</b>, dampening business investment and sales of houses and big-ticket goods. Business sales decline → <b>unwanted inventory</b> and reduced profits. <b>Stock prices fall</b> and market activity declines."],
            ["<b>Contraction</b>", "Economic activity declines — <b>real GDP decreases</b>. If it lasts <b>at least two consecutive quarters</b>, the economy is in <b>recession</b>. Businesses reduce production, postpone investment, curtail hiring, may lay off. <b>Business failures outnumber start-ups.</b> Falling employment erodes household income and confidence; consumers spend less and save more, <b>fuelling the contraction</b>."],
            ["<b>Trough</b>", "The lowest point. <b>Interest rates fall, triggering a bond rally.</b> <b>Inflation falls.</b> Consumers who postponed purchases are <b>spurred by lower rates and begin to spend</b>. <b>Stock prices rally.</b>"],
            ["<b>Recovery</b>", "GDP <b>returns to its previous peak</b>. Typically begins with renewed buying of <b>interest rate–sensitive items like houses and cars</b>. Businesses must increase production to meet new demand but are <b>still too cautious to hire back significant numbers</b> — the period of widespread layoffs is over. <b>Not yet ready for significant new investment.</b> <b>Unemployment remains high</b>; wage pressures restrained and inflation may <b>decline further</b>."]
          ]
        }},
        { flag: {
          label: "Peak and trough are mirror images — do not swap them",
          text: "At the <b>peak</b>: interest rates <b>rise</b>, bond prices <b>fall</b>, stock prices <b>fall</b>, inflation <b>rises</b>. At the <b>trough</b>: interest rates <b>fall</b>, there is a <b>bond rally</b>, stock prices <b>rally</b>, inflation <b>falls</b>. When the economy rises above its previous peak (point A in Figure 3.2), <b>another expansion has begun</b>."
        }},
        { points: [
          "<b>Economic indicators</b> are statistics or data series used to <b>analyze business conditions and current economic activity</b>. They are classified as <b>leading, coincident or lagging</b>.",
          "<b>Leading indicators</b> <b>peak and trough before the overall economy</b>, anticipating emerging trends. They are the <b>most useful and widely used</b> because they anticipate change.",
          "<b>Coincident indicators</b> change at <b>approximately the same time and in the same direction</b> as the whole economy, providing information about its <b>current state</b>.",
          "<b>Lagging indicators</b> change <b>after</b> the economy as a whole changes. Important because they <b>confirm that a business cycle pattern is occurring</b>."
        ]},
        { table: {
          caption: "Classify the indicator — the most-tested list in the chapter",
          head: ["Leading", "Coincident", "Lagging"],
          rows: [
            ["Housing starts", "Personal income", "<b>Unemployment</b>"],
            ["Manufacturers' new orders", "GDP", "Private sector plant and equipment spending"],
            ["Commodity prices", "Industrial production", "Business loans and interest on such borrowing"],
            ["Average hours worked per week", "Retail sales", "Labour costs"],
            ["Stock prices", "—", "The inflation rate"],
            ["The money supply", "—", "—"]
          ]
        }},
        { flag: {
          label: "The two examples the text gives",
          text: "<b>Personal income</b> is a good <b>coincident</b> indicator because if it is rising, economic growth typically follows. <b>Unemployment</b> is one of the most popular <b>lagging</b> indicators because a rising unemployment rate indicates the economy is already doing poorly or that companies are anticipating a downturn."
        }},
        { points: [
          "<b>Identifying recessions:</b> the popular definition is <b>at least two consecutive quarters of declining real GDP</b>. <b>Statistics Canada</b> and the U.S. <b>National Bureau of Economic Research</b> describe it differently — Statistics Canada judges by the <b>depth, duration and diffusion</b> of the decline.",
          "Statistics Canada's criteria: the decline must be of <b>substantial depth</b> (marginal declines may be statistical error); the <b>duration must be more than a couple of months</b> (bad weather alone can cause a temporary decline); the decline must be a <b>feature of the whole economy</b> (a strike in one major industry does not constitute a recession); and the <b>behaviour of employment and per capita income</b> may also be taken into account.",
          "<b>Soft landing:</b> a business cycle phase where economic growth <b>slows sharply but does not turn negative</b>, while <b>inflation falls or remains low</b>. Considered the <b>&ldquo;Holy Grail&rdquo;</b> of policy makers — sustained growth without recurring recessions."
        ]},
        { table: {
          caption: "Exhibit 3.1 — recent slowdowns and recessions in Canada",
          head: ["Dates", "Duration"],
          rows: [
            ["April 2001 – September 2001 <em>(technically a growth slowdown, not a recession)</em>", "<b>5 months</b>"],
            ["July 2008 – July 2009", "<b>12 months</b>"],
            ["March 2020 – August 2020", "<b>6 months</b>"]
          ],
          numCol: 1
        }},
        { points: [
          "In <b>March 2020</b>, Canada's real GDP fell by <b>more than 7%</b> as a result of the worldwide pandemic. Canada's GDP finished 2020 <b>5.4% lower</b> than the previous year. In the <b>first quarter of 2021</b>, real GDP growth was <b>1.38%</b>."
        ]}
      ]
    },
    {
      tag: "Objective 4",
      title: "The labour market and unemployment",
      blocks: [
        { points: [
          "Statistics Canada divides the population into the <b>working-age population</b> — those aged <b>15 years and older</b> — and those too young to work.",
          "The <b>labour force</b> = the sum of the working-age population who are <b>either employed or unemployed</b>.",
          "<b>Participation rate</b> = the share of the <b>working-age population that is in the labour force</b>. Currently <b>65.4%</b> in Canada. It matters because it shows the <b>willingness of people to enter the workforce and take jobs</b>. It has trended upward over 50 years, from <b>54% in the early 1960s</b>.",
          "<b>Unemployment rate</b> = the share of the <b>labour force that is unemployed and actively looking for work</b>. It was <b>5.8% in December 2023</b>. It can rise either because the number employed fell <b>or</b> because more people entered the workforce looking for work — <b>or both</b>.",
          "<b>Discouraged workers</b> are individuals who are <b>available and willing to work but cannot find jobs and have not made efforts to find a job within the previous month</b>. They are therefore <b>not included as part of the labour force</b>. Their disappearance can produce an <b>artificially low unemployment rate</b>.",
          "The average duration of unemployment is <b>shorter during an expansion and longer during a recession</b>."
        ]},
        { table: {
          caption: "The four types of unemployment",
          head: ["Type", "Cause"],
          rows: [
            ["<b>Cyclical</b>", "Tied <b>directly to fluctuations in the business cycle</b>. Rises when the economy weakens and firms lay off workers in response to lower sales; drops when the economy strengthens."],
            ["<b>Seasonal</b>", "Occurs in industries that <b>operate only during part of the year</b> — e.g. farmhands hired to pick fruit and vegetables only June to October. A regular winter occurrence in such industries."],
            ["<b>Frictional</b>", "The result of <b>normal labour turnover</b> — people entering and leaving the workforce and the ongoing creation and destruction of jobs. Occurs even in the best economic times. <b>A normal part of a healthy economy.</b>"],
            ["<b>Structural</b>", "Workers <b>cannot find work or fill available jobs because they lack the necessary skills</b>, do not live where jobs are available, or <b>decide not to work at the wage rate offered</b>. Tied to changes in technology, international competition and government policy. <b>Lasts longer than frictional</b> because workers must retrain or relocate."]
          ]
        }},
        { flag: {
          label: "The frictional / structural boundary",
          text: "With <b>frictional</b> unemployment, the unemployed worker <b>has the required skill level</b> to fill a job vacancy. With <b>structural</b> unemployment, the worker looking for work <b>does not possess the needed skills</b>. That is the distinction the exam tests."
        }},
        { points: [
          "The existence of frictional and structural factors <b>prevents unemployment from falling to zero</b>. This minimal level is the <b>natural unemployment rate</b> — the level at which the economy is operating <b>close to its full potential or capacity</b>, with all resources including labour fully employed.",
          "<b>Actual rate ABOVE the natural rate:</b> an <b>excess supply of workers</b> weakens labour bargaining power, which <b>discourages wage gains and helps keep inflation in check</b>.",
          "<b>Actual rate BELOW the natural rate:</b> a <b>shortage of workers</b> contributes to <b>increased wage gains and higher inflation</b>.",
          "The natural unemployment rate is therefore viewed as the level of unemployment <b>consistent with stable inflation</b> — which is why it matters for monetary and fiscal policy decisions."
        ]}
      ]
    },
    {
      tag: "Objective 5",
      title: "Interest rates, money and inflation",
      blocks: [
        { points: [
          "<b>Interest rates</b> are an important link between <b>current and future economic activity</b>. For consumers they represent the <b>gain from deferring consumption</b>; for businesses they are <b>one component of the cost of capital</b> — the cost of borrowing money."
        ]},
        { table: {
          caption: "The five determinants of interest rates",
          head: ["Determinant", "Effect"],
          rows: [
            ["<b>Demand and supply of capital</b>", "A large government deficit or a boom in business investment <b>raises demand for capital and forces up the price of credit</b>, unless supply rises equivalently. Higher rates may encourage saving; more saving may in turn reduce rates."],
            ["<b>Default risk</b>", "The greater the risk that borrowers default, the <b>higher the rate demanded by lenders</b>. If the central government is at risk of defaulting, rates rise for <b>everybody</b>. This additional rate is the <b>default premium</b>."],
            ["<b>Foreign interest rates and the exchange rate</b>", "Canada has an open economy. A rise in U.S. rates draws investors to sell Canadian dollars to buy U.S. securities, <b>increasing the supply of C$</b> and placing <b>downward pressure on its value</b>. The Bank of Canada can <b>raise short-term rates</b> to slow that fall."],
            ["<b>Central bank credibility</b>", "The <b>more credible and long-established</b> a commitment to low inflation, the <b>lower interest rates will be</b> to compensate for the risk of rising inflation."],
            ["<b>Inflation</b>", "The <b>higher the expected inflation rate, the higher the interest rate</b> lenders must charge to compensate for the erosion of purchasing power."]
          ]
        }},
        { points: [
          "<b>Higher interest rates affect the economy by:</b> raising the <b>cost of capital</b> for business investment, reducing profitable investment opportunities; <b>discouraging consumer spending</b>, especially on houses and major durables bought on credit, which encourages saving; and <b>reducing income available for other items</b> by increasing the portion of household income needed to service debt (partly offset by higher interest income for savers).",
          "Thus higher rates have a <b>negative effect on growth prospects</b>; lower rates have the opposite effect and provide a positive environment for growth.",
          "<b>Nominal interest rate</b> = one where the <b>effects of inflation have NOT been removed</b> — e.g. the rate charged by a bank on a loan, or the quoted rate on a GIC or Treasury bill.",
          "<b>Real interest rate = nominal interest rate − expected inflation rate.</b>",
          "<b>Negative interest rates</b> occur when the rate charged on borrowed funds is <b>less than zero</b>. Banks may charge customers for holding deposits, or pay a customer to take a loan. Most likely when policy has already moved rates to zero or near zero but further stimulus is required."
        ]},
        { flag: {
          label: "The negative-rate dates",
          text: "On <b>March 25, 2020</b>, both the <b>one- and three-month U.S. Treasury bills traded at negative yields for the first time</b>. Negative rates have <b>not appeared again in the U.S. since May 2020</b>. In Canada, <b>none of the Bank of Canada's administered rates has ever reached negative territory</b> — Canadian rates are normally higher than U.S. equivalents, which provides a buffer."
        }},
        { points: [
          "<b>The three functions of money:</b> a <b>medium of exchange</b> (without it, goods would be bartered); a <b>unit of account</b> (so we know exactly what a good or service costs); and a <b>store of value</b> (it has no expiration date — the more stable its value, the better it acts as a store of value).",
          "<b>Monetary aggregates</b> are measures of the amount of money in circulation. The Bank of Canada looks primarily at <b>changes in the growth rate</b> of the aggregates it tracks, striving to keep money growth consistent with <b>low inflation and long-term growth</b>.",
          "<b>Inflation</b> is a <b>generalized, sustained trend of rising prices</b>. A <b>one-time jump</b> in prices caused by an oil price increase or a new sales tax is <b>not true inflation</b> unless it feeds into wages and other costs and initiates a <b>wage-price spiral</b>. A rise in the price of <b>one product</b> is not inflation either — it may be a relative price change reflecting scarcity.",
          "Inflation is ultimately about <b>money growth</b> — <b>&ldquo;too much money chasing too few products.&rdquo;</b>",
          "The <b>Consumer Price Index (CPI)</b> is the most widely used indicator of inflation and is considered a measure of the <b>cost of living</b> in Canada. Statistics Canada tracks the retail price of a basket of <b>600 different goods and services</b>, each <b>weighted</b> to reflect typical consumer spending."
        ]},
        { table: {
          caption: "The inflation rate calculation — be able to run this",
          head: ["Step", "Detail"],
          rows: [
            ["<b>Formula</b>", "<b>Inflation rate = (CPI<sub>current</sub> − CPI<sub>previous</sub>) ÷ CPI<sub>previous</sub> × 100</b>"],
            ["<b>Base year</b>", "<b>2002</b> in Canada, given a value of <b>100</b>"],
            ["<b>Worked example</b>", "CPI was <b>158.3</b> in December 2023 and <b>153.1</b> in December 2022.<br>(158.3 − 153.1) ÷ 153.1 × 100 = 0.033964 = <b>3.4%</b>"],
            ["<b>Reading the index</b>", "A total CPI of <b>158.3</b> means the basket costs <b>58.3% more</b> than it did in 2002"]
          ]
        }},
        { points: [
          "<b>The costs of inflation:</b> it <b>erodes the standard of living</b> of those on fixed incomes and those lacking wage bargaining power, while rewarding those able to increase income; it <b>reduces the real value of investments</b> such as fixed-rate loans, since loans are repaid in dollars that buy less; it <b>distorts the signal prices send</b>, making it hard to tell an inflationary increase from a genuine relative price change; and <b>accelerating inflation usually brings rising interest rates and a recession</b>, so high-inflation economies experience more severe booms and busts.",
          "<b>Output gap</b> = the difference between <b>real GDP</b> (what the economy actually produces) and <b>potential GDP</b> (what it is capable of producing when labour, capital and technology are fully employed at normal levels). Potential output is the <b>maximum level of real GDP the economy can maintain without inflation increasing</b>.",
          "<b>Negative output gap:</b> actual output is <b>below</b> potential. There is <b>spare capacity</b> — unemployed workers and unused plant can be called into service without impacting wages or prices. <b>Inflation will fall or remain steady.</b>",
          "<b>Positive output gap:</b> actual output is <b>above</b> potential. The economy is <b>operating above capacity</b>; scarce labour fuels wage increases and places <b>upward pressure on inflation</b>. Generally occurs as the economy moves through an expansion toward the peak.",
          "<b>Demand-pull inflation:</b> companies operating well above normal capacity <b>raise prices in response to strong consumer demand</b>. Higher and continued consumer demand pushes inflation higher.",
          "<b>Cost-push inflation:</b> a <b>supply-side shock</b> — higher wages or raw material prices raise the cost of production, and firms respond by <b>raising prices and producing a smaller amount</b>."
        ]},
        { flag: {
          label: "The three &ldquo;-flations&rdquo; — the classic trap",
          text: "<b>Inflation</b>: prices rising. <b>Disinflation</b>: a <b>decline in the rate at which prices rise</b> — prices are <b>still rising, but at a slower rate</b>. <b>Deflation</b>: a <b>sustained fall in prices</b> where the annual change in the CPI is <b>negative year after year</b> — the opposite of inflation."
        }},
        { points: [
          "The <b>Phillips curve</b> says that when <b>unemployment is low, inflation tends to be high</b>, and when <b>unemployment is high, inflation tends to be low</b>. Lower unemployment is achieved in the short run by <b>increasing inflation at a faster rate</b>; lower inflation is achieved at the cost of <b>possibly increased unemployment and slower economic growth</b>.",
          "The <b>sacrifice ratio</b> describes the extent to which <b>GDP must be reduced, with increased unemployment, to achieve a 1% decrease in the inflation rate</b>. In Canada experts suggest it is <b>as high as 4</b> — that is, <b>4% of output must be sacrificed to bring inflation down 1%</b>.",
          "<b>Deflation's danger:</b> sustained falling prices lead to a decline in corporate profits. Businesses sell at lower prices, cut production costs and wage rates, and may lay off workers. Unemployment rises, growth slows, consumers shift from spending to saving, and declining company profits <b>negatively impact stock prices</b>."
        ]},
        { flag: {
          label: "Bank Rate history — clean, testable numbers",
          text: "In <b>2007</b> the Bank Rate was as high as <b>4.75%</b>. During the <b>2008–2009 recession</b> it fell to <b>0.50%</b> and stayed there for more than a year. In <b>March 2020</b> it again dropped to <b>0.50%</b> in response to the pandemic, remaining there for more than a year. As of <b>February 2024</b> it had climbed to <b>5.0%</b>."
        }}
      ]
    },
    {
      tag: "Objective 6",
      title: "Monetary policy, fiscal policy and international economics",
      blocks: [
        { points: [
          "<b>Monetary policy</b> = <b>regulation of the money supply and available credit</b> for the purpose of promoting <b>sustained economic growth and price stability</b>. Its goal is to maintain the <b>value of our currency and our economic health</b>.",
          "Canada's central bank, the <b>Bank of Canada</b>, uses its influence over <b>short-term interest rates</b> to control changes in the money supply and available credit.",
          "The <b>Bank of Canada Act</b> preamble states the Bank's duties: to <b>regulate credit and currency</b> in the best interests of the economic life of the nation; to <b>control and protect the external value</b> of the national monetary unit; to <b>mitigate fluctuations</b> in the general level of production, trade, prices and employment; and to <b>promote the economic and financial welfare</b> of the Dominion.",
          "The Bank <b>administers policy independently</b> without day-to-day government intervention, but the <b>thrust of policy is the ultimate responsibility of the elected government</b>.",
          "<b>Expansionary monetary policy increases</b> the amount of money and credit available. <b>Contractionary monetary policy decreases</b> it."
        ]},
        { table: {
          caption: "Monetary policy — the three tools and their directions",
          head: ["Tool", "Expansionary", "Contractionary"],
          rows: [
            ["<b>Bank Rate</b>", "Bank of Canada <b>lowers</b> the Bank Rate → nominal rates fall → borrowing cheaper → <b>money supply increases</b>", "Bank of Canada <b>raises</b> the Bank Rate → nominal rates rise → borrowing dearer → <b>money supply decreases</b>"],
            ["<b>Cash management</b><br>(open-market operations)", "Bank <b>buys</b> bonds → <b>bond prices rise</b> → <b>interest rates fall</b> → <b>money supply increases</b>", "Bank <b>sells</b> bonds → <b>bond prices fall</b> → <b>interest rates rise</b> → <b>money supply decreases</b>"],
            ["<b>Drawdowns &amp; redeposits</b>", "<b>Redeposit</b>: funds transferred <b>from</b> the Bank of Canada <b>to</b> the chartered banks → increases deposits and reserves → <b>downward pressure on rates</b>, incentive to lend more", "<b>Drawdown</b>: deposits transferred <b>to</b> the Bank of Canada <b>from</b> the chartered banks → drains cash balances → contraction in loans → <b>upward pressure on rates</b>"]
          ]
        }},
        { points: [
          "The Bank carries out monetary policy primarily through changes to the <b>target for the overnight rate</b> — the rate set in the <b>overnight market</b> where major Canadian financial institutions lend each other money on an overnight basis.",
          "The <b>operating band is currently 50 basis points</b> (one-half of a percentage point) wide. Each day the Bank targets the <b>mid-point</b> of the band. Example: if the band is <b>1% to 1.5%</b>, the target for the overnight rate is <b>1.25%</b>.",
          "The <b>Bank Rate</b> is the <b>minimum rate at which the Bank of Canada will lend money on a short-term basis</b> to the chartered banks and other members of <b>Payments Canada</b>, in its role as <b>lender of last resort</b>. It is the <b>UPPER limit of the operating band</b> — with a band of 1% to 1.5%, the Bank Rate is <b>1.5%</b>.",
          "<b>Administered rates</b> — those determined by each financial institution, such as <b>prime rates</b> — usually <b>follow the trend of the Bank Rate</b>."
        ]},
        { flag: {
          label: "Operating band arithmetic",
          text: "Band <b>1% – 1.5%</b> → <b>overnight rate target = the mid-point = 1.25%</b>, <b>Bank Rate = the upper limit = 1.5%</b>. If the exam gives you a band, it wants either the mid-point or the upper limit. Know which is which."
        }},
        { table: {
          caption: "Fiscal policy",
          head: ["Item", "Detail"],
          rows: [
            ["<b>Definition</b>", "A <b>deliberate action by government</b> (federal, provincial or territorial) to influence the economy through changes in <b>spending or taxation</b>"],
            ["<b>Expansionary</b>", "Growth lower than target → <b>increase spending</b> or <b>decrease taxes</b>. Example: unemployment too high → <b>cut business taxes</b> to encourage hiring"],
            ["<b>Contractionary</b>", "Growth rising too quickly → <b>decrease spending</b> or <b>increase taxes</b>. Example: public spending too high → <b>cut public programs</b> such as health care, even though cuts may increase unemployment"],
            ["<b>Spending channel</b>", "Governments can <b>purchase goods or services</b> (a new highway) or <b>transfer money</b> to citizens (social security cheques). <b>Only the first type is recorded as government spending in GDP.</b>"],
            ["<b>Tax types</b>", "<b>Direct</b> (income of individuals and companies); <b>sales</b> (value-added such as GST, and excise such as on liquor); <b>payroll</b> (share of wages); <b>capital</b> (size of a company's assets or capital); <b>property</b> (residential and commercial)"]
          ]
        }},
        { points: [
          "The amount of tax collected varies because the <b>tax base</b> changed (more or fewer people or companies paying) <b>or</b> because the <b>tax rate</b> changed. Raising tax rates <b>reduces disposable income</b>, dampening consumer spending.",
          "<b>International economics:</b> exports of goods and services are approximately <b>30% of Canadian GDP</b>, compared with <b>20% in the 1960s</b>. The economic performance of our trading partners is therefore an important determinant of Canadian growth.",
          "The <b>balance of payments</b> is a <b>detailed statement of a country's economic transactions with the rest of the world</b> for a given period, typically a quarter or a year. It has <b>two components</b>: the <b>current account</b> and the <b>capital and financial account</b>.",
          "<b>Current account:</b> records the <b>exchange of goods and services</b> between Canadians and foreigners, the <b>earnings from investment income</b>, and <b>net transfers</b> such as foreign aid. Its most important component is <b>merchandise trade</b>.",
          "<b>Capital and financial account:</b> records <b>financial flows</b> related to investments by foreigners in Canada and investments by Canadians abroad.",
          "Think of the <b>current account as what we spend on things</b> and the <b>capital and financial account as what we use to finance that spending</b>. If Canada buys more from abroad than it sells, it runs a <b>current account deficit</b> and must sell more assets to finance it — running a <b>capital and financial account surplus, or going into debt</b>.",
          "A <b>falling Canadian dollar</b> lowers the price of Canadian exports in foreign markets and <b>raises the price of imports</b> — this <b>boosts exports and depresses imports</b>. A <b>rising</b> Canadian dollar has the <b>opposite effect</b>."
        ]},
        { flag: {
          label: "The current vs. capital account test",
          text: "The key difference is that <b>capital and financial account transactions result in the acquisition of an ASSET and the right to any income it earns</b>. Buying a <b>computer</b> made in Canada is a <b>current account</b> transaction. Buying <b>the company that made the computer</b> is a <b>capital and financial account</b> transaction."
        }}
      ]
    }
  ],

  numbers: [
    ["$2,000 / 200", "Equilibrium price and equilibrium supply in the Table 3.1 laptop market"],
    ["C+I+G+(X−M)", "The <b>expenditure approach</b> to GDP"],
    ["$5B − $2B = $3B", "Production (value-added) approach example for the computer industry"],
    ["4.4% − 1.1% = 3.3%", "Nominal GDP growth less price rise = <b>real growth</b>"],
    ["2.4% − 3.1% = −0.7%", "Positive nominal growth, but the economy actually <b>shrank</b>"],
    ["2% → 3%", "Raising annual growth by one point <b>doubles living standards over 30–40 years</b>"],
    ["5", "Phases of the business cycle: expansion, peak, contraction, trough, recovery"],
    ["2 quarters", "Consecutive quarters of declining real GDP = the popular definition of <b>recession</b>"],
    ["Apr–Sep 2001", "<b>5 months</b> — technically a growth slowdown, not a recession"],
    ["Jul 2008–Jul 2009", "<b>12 months</b>"],
    ["Mar–Aug 2020", "<b>6 months</b>; real GDP fell more than <b>7%</b> in March 2020"],
    ["5.4% / 1.38%", "Canada's GDP finished 2020 5.4% lower; Q1 2021 real growth was 1.38%"],
    ["15 years+", "Definition of the <b>working-age population</b>"],
    ["65.4%", "Canada's current <b>participation rate</b> (up from <b>54%</b> in the early 1960s)"],
    ["5.8%", "Canada's <b>unemployment rate</b>, December 2023"],
    ["11.9% / 11.4%", "Unemployment peaks for the <b>1980–1983</b> and <b>1991</b> recessions"],
    ["13.7% / 8.8%", "Unemployment spike in early <b>2020</b>; finished the year at 8.8%"],
    ["4", "Types of unemployment: cyclical, seasonal, frictional, structural"],
    ["3", "Functions of money: medium of exchange, unit of account, store of value"],
    ["600", "Goods and services in the <b>CPI basket</b>"],
    ["2002 = 100", "CPI <b>base year</b> in Canada"],
    ["158.3 / 153.1", "CPI December 2023 and December 2022 → inflation of <b>3.4%</b>"],
    ["58.3%", "How much more the basket cost in Dec 2023 than in the 2002 base year"],
    ["12.2% / −0.9%", "Canada's inflation high (<b>1981</b>) and low (<b>July 2009</b>)"],
    ["4", "Canada's <b>sacrifice ratio</b> — 4% of output to cut inflation 1%"],
    ["50 bp", "Width of the Bank of Canada's <b>operating band</b>"],
    ["1%–1.5%", "Example band → overnight target <b>1.25%</b> (mid-point), Bank Rate <b>1.5%</b> (upper limit)"],
    ["4.75% → 0.50%", "Bank Rate in <b>2007</b>, then during the <b>2008–09</b> recession"],
    ["0.50% → 5.0%", "Bank Rate <b>March 2020</b>, then <b>February 2024</b>"],
    ["Mar 25, 2020", "U.S. one- and three-month T-bills traded at <b>negative yields</b> for the first time"],
    ["~30% / 20%", "Exports as a share of Canadian GDP <b>today</b> vs. the <b>1960s</b>"]
  ],

  traps: [
    ["Peak", "Interest rates <b>rise</b>, bond prices <b>fall</b>, stock prices <b>fall</b>, inflation <b>rises</b>, unwanted inventory accumulates.", "Trough", "Interest rates <b>fall</b> → <b>bond rally</b>. Inflation <b>falls</b>. Stock prices <b>rally</b>. Consumers begin to spend again."],
    ["Contraction", "Real GDP <b>decreasing</b>. Two consecutive quarters = <b>recession</b>. Business failures <b>outnumber</b> start-ups.", "Recovery", "GDP <b>returns to its previous peak</b>. Layoffs over but hiring still cautious; <b>unemployment remains high</b>."],
    ["Leading indicators", "<b>Peak and trough BEFORE</b> the economy. Housing starts, new orders, commodity prices, average hours worked, <b>stock prices</b>, money supply.", "Lagging indicators", "Change <b>AFTER</b> the economy; <b>confirm</b> a pattern. <b>Unemployment</b>, plant &amp; equipment spending, business loans, labour costs, <b>the inflation rate</b>."],
    ["Frictional unemployment", "Normal turnover. The worker <b>HAS</b> the required skills. Normal part of a healthy economy.", "Structural unemployment", "The worker <b>LACKS</b> the skills, is in the wrong location, or won't work at the offered wage. <b>Lasts longer.</b>"],
    ["Disinflation", "Prices are <b>STILL RISING</b> — just at a <b>slower rate</b>. A decline in the rate of inflation.", "Deflation", "Prices are <b>ACTUALLY FALLING</b>. The annual change in the CPI is <b>negative year after year</b>."],
    ["Demand-pull inflation", "Comes from the <b>demand side</b>. Strong consumer demand lets firms operating above capacity <b>raise prices</b>.", "Cost-push inflation", "Comes from the <b>supply side</b>. Higher wages or raw material costs push production costs up; firms raise prices and produce <b>less</b>."],
    ["Nominal interest rate", "Effects of inflation <b>NOT removed</b> — the quoted rate on a loan, GIC or T-bill.", "Real interest rate", "<b>Nominal minus expected inflation.</b>"],
    ["Nominal GDP", "Valued at the prices <b>of that same year</b>. Reflects <b>both</b> price and output changes.", "Real GDP", "Valued at <b>base-year</b> prices. Isolates the change in <b>output</b>."],
    ["Negative output gap", "Actual output <b>BELOW</b> potential. <b>Spare capacity.</b> Inflation <b>falls or stays steady</b>.", "Positive output gap", "Actual output <b>ABOVE</b> potential. Operating <b>above capacity</b>. <b>Upward pressure on inflation</b>."],
    ["Overnight rate target", "The <b>MID-POINT</b> of the operating band. Band of 1%–1.5% → target <b>1.25%</b>.", "Bank Rate", "The <b>UPPER LIMIT</b> of the band. Band of 1%–1.5% → Bank Rate <b>1.5%</b>. Minimum rate the BoC lends at."],
    ["Drawdown", "Deposits move <b>TO</b> the Bank of Canada <b>FROM</b> the chartered banks. Drains cash → <b>rates up</b> (contractionary).", "Redeposit", "Funds move <b>FROM</b> the Bank of Canada <b>TO</b> the chartered banks. Adds reserves → <b>rates down</b> (expansionary)."],
    ["Bank BUYS bonds", "Bond prices <b>rise</b> → interest rates <b>fall</b> → money supply <b>increases</b>. <b>Expansionary.</b>", "Bank SELLS bonds", "Bond prices <b>fall</b> → interest rates <b>rise</b> → money supply <b>decreases</b>. <b>Contractionary.</b>"],
    ["Monetary policy", "The <b>Bank of Canada</b>. Money supply and available credit, via rates and bond operations.", "Fiscal policy", "The <b>government</b> (federal, provincial, territorial). <b>Spending and taxation.</b>"],
    ["Current account", "Goods and services, investment income earnings, net transfers. Buying a <b>computer</b> made in Canada.", "Capital and financial account", "Financial flows — results in acquiring an <b>ASSET</b> and its income. Buying <b>the company</b> that made the computer."],
    ["Actual unemployment ABOVE natural rate", "<b>Excess supply</b> of workers → weak bargaining power → <b>inflation held in check</b>.", "Actual unemployment BELOW natural rate", "<b>Shortage</b> of workers → wage gains → <b>higher inflation</b>."],
    ["Microeconomics", "<b>Individual</b> consumers and firms; how <b>prices</b> are determined.", "Macroeconomics", "The economy <b>as a whole</b> — unemployment, inflation, recessions, deficits, national debt."]
  ],

  cards: [
    ["Distinguish microeconomics from macroeconomics.", "<b>Microeconomics</b> analyzes the market behaviour of <b>individual consumers and firms</b>, how prices are determined, and how prices determine production, distribution and use of goods. <b>Macroeconomics</b> focuses on the <b>economy as a whole</b> — unemployment, inflation, recessions, government spending and taxation, deficits and national debts."],
    ["Name the three decision makers and each one's objective.", "<ul><li><b>Consumers</b> — maximize satisfaction or well-being within available resources</li><li><b>Firms</b> — maximize profits</li><li><b>Governments</b> — spend on education, health care, training and military; oversee regulatory agencies; undertake public works</li></ul>"],
    ["State the Law of Demand and the Law of Supply.", "<b>Demand:</b> the higher the price, the <b>lower</b> the quantity demanded; the lower the price, the higher the quantity demanded. <b>Supply:</b> the higher the price of a good, the <b>greater</b> the quantity supplied."],
    ["Define a market.", "<b>Any arrangement that allows buyers and sellers to conduct business with one another.</b> The decision makers need not meet physically — they may be connected by electronic means."],
    ["What is the equilibrium price?", "The price that <b>matches what someone is willing to pay with the price at which someone is willing to supply</b> — the single price at which quantity demanded equals quantity supplied. In the text's laptop market this is <b>$2,000</b>, with an equilibrium supply of <b>200 units</b>."],
    ["Define GDP.", "The <b>market value of all final goods and services produced within a country in a given time period</b>, usually a year or a quarter."],
    ["What is a final good? Give the text's example.", "A <b>finished product purchased by the ultimate end user</b>. A <b>computer is a final good; the chip inside it is not</b>, because the chip was used to manufacture the computer. Counting both would <b>overstate</b> GDP."],
    ["Give the expenditure approach formula and its four components.", "<b>GDP = C + I + G + (X − M)</b><ul><li><b>C</b> — personal consumption</li><li><b>I</b> — investment</li><li><b>G</b> — government spending on goods and services</li><li><b>(X − M)</b> — net exports</li></ul>"],
    ["Explain the production (value-added) approach.", "It calculates an industry's or sector's <b>output and subtracts the value of all goods and services used to produce the outputs</b>. Example: the computer industry produces <b>$5 billion</b> in computers and spends <b>$2 billion</b> on inputs, so its value added to GDP is <b>$3 billion</b>."],
    ["Contrast nominal and real GDP.", "<b>Nominal GDP</b> is valued at the prices prevailing <b>in that same year</b> — changes reflect <b>both prices and output</b>. <b>Real GDP</b> (constant dollar) is valued at <b>base-year prices</b>, isolating the change in the <b>amount of output</b>. Differences between the two are <b>entirely the result of price changes</b>."],
    ["Nominal GDP grew 2.4% while prices rose 3.1%. What happened?", "Real growth was approximately <b>−0.7%</b>. The economy <b>actually shrank</b> — the nation was <b>less productive</b> than the year before, despite a positive nominal figure."],
    ["What three factors drive growth in GDP?", "<ul><li>Increases in <b>population</b> over time</li><li>Increases in the <b>capital stock</b> — more equipment, better training and education</li><li>Improvements in <b>technology</b></li></ul>"],
    ["Can capital accumulation alone sustain economic growth?", "<b>No.</b> Increased capital eventually leads to <b>smaller and smaller gains in output</b>, so a higher savings rate is not responsible for a sustained higher growth rate over very long periods — though it can support a higher <b>level</b> of output per person. <b>Sustained growth requires technological progress.</b>"],
    ["Name the five phases of the business cycle in order.", "<b>Expansion → Peak → Contraction → Trough → Recovery</b> (and when the economy rises above its previous peak, another expansion has begun)."],
    ["Describe the peak.", "Demand begins to <b>outstrip capacity</b>. Labour and product shortages cause <b>wage increases and inflation to rise</b>. <b>Interest rates rise and bond prices fall</b>. Business sales decline, leaving <b>unwanted inventory</b> and reduced profits. <b>Stock prices fall</b> and market activity declines."],
    ["Describe the trough.", "The lowest point. <b>Interest rates fall, triggering a bond rally.</b> <b>Inflation falls.</b> Consumers who postponed purchases are spurred by lower rates and <b>begin to spend</b>. <b>Stock prices rally.</b>"],
    ["What distinguishes a recovery from an expansion?", "In the <b>recovery</b>, GDP is <b>returning to its previous peak</b> — it begins with renewed buying of interest rate–sensitive items like houses and cars, but businesses are <b>still too cautious to hire back significant numbers</b>, <b>unemployment remains high</b>, and they are not yet ready for significant new investment. Once GDP rises <b>above</b> the previous peak, a new <b>expansion</b> has begun."],
    ["What happens to real GDP and business failures during a contraction?", "<b>Real GDP decreases.</b> Businesses reduce production, postpone investment, curtail hiring and may lay off staff. <b>Business failures outnumber start-ups.</b> If it lasts at least <b>two consecutive quarters</b>, it is a <b>recession</b>."],
    ["List the leading indicators.", "<ul><li>Housing starts</li><li>Manufacturers' new orders</li><li>Commodity prices</li><li>Average hours worked per week</li><li>Stock prices</li><li>The money supply</li></ul>They <b>peak and trough before</b> the overall economy."],
    ["List the coincident indicators.", "<b>Personal income</b>, <b>GDP</b>, <b>industrial production</b> and <b>retail sales</b>. They change at approximately the <b>same time and in the same direction</b> as the whole economy."],
    ["List the lagging indicators.", "<ul><li><b>Unemployment</b></li><li>Private sector plant and equipment spending</li><li>Business loans and interest on such borrowing</li><li>Labour costs</li><li>The inflation rate</li></ul>They change <b>after</b> the economy and <b>confirm</b> that a business cycle pattern is occurring."],
    ["What criteria does Statistics Canada use to judge a recession?", "The <b>depth, duration and diffusion</b> of the decline: it must be of <b>substantial depth</b>; last <b>more than a couple of months</b>; be a feature of the <b>whole economy</b> (a strike in one industry does not count); and the behaviour of <b>employment and per capita income</b> may also be considered."],
    ["What is a soft landing?", "A business cycle phase where economic growth <b>slows sharply but does not turn negative</b>, while <b>inflation falls or remains low</b>. Considered the <b>&ldquo;Holy Grail&rdquo;</b> of policy makers — sustained growth without recurring recessions."],
    ["Define the labour force and the working-age population.", "The <b>working-age population</b> is those aged <b>15 years and older</b>. The <b>labour force</b> is the sum of the working-age population who are <b>either employed or unemployed</b>."],
    ["Define the participation rate and the unemployment rate.", "<b>Participation rate</b> = the share of the <b>working-age population that is in the labour force</b> (currently <b>65.4%</b>). <b>Unemployment rate</b> = the share of the <b>labour force that is unemployed and actively looking for work</b> (<b>5.8%</b> in December 2023)."],
    ["What are discouraged workers and why do they matter?", "Individuals <b>available and willing to work</b> who <b>cannot find jobs and have not made efforts to find one within the previous month</b>. They are <b>not included in the labour force</b>, so their disappearance can produce an <b>artificially low unemployment rate</b>."],
    ["Name the four types of unemployment.", "<b>Cyclical</b> (tied to the business cycle), <b>seasonal</b> (industries operating only part of the year), <b>frictional</b> (normal labour turnover), and <b>structural</b> (lacking skills, wrong location, or unwilling to work at the offered wage)."],
    ["How do you tell frictional from structural unemployment?", "With <b>frictional</b> unemployment the worker <b>HAS the required skill level</b> to fill a vacancy. With <b>structural</b> unemployment the worker <b>does NOT possess the needed skills</b> — or does not live where jobs are, or won't work at the market wage. Structural <b>lasts longer</b> because workers must retrain or relocate."],
    ["Define the natural unemployment rate and its significance.", "The <b>minimal level of unemployment</b> below which the rate will not drop without causing negative effects — the economy is operating <b>close to full potential</b>. It is viewed as the level of unemployment <b>consistent with stable inflation</b>, which is why it matters for policy."],
    ["What happens when actual unemployment is below the natural rate?", "A <b>shortage of workers</b> contributes to <b>increased wage gains and higher inflation</b>. When actual unemployment is <b>above</b> the natural rate, an excess supply of workers weakens bargaining power, which <b>keeps inflation in check</b>."],
    ["Name the five determinants of interest rates.", "<ul><li><b>Demand and supply of capital</b></li><li><b>Default risk</b> (the additional rate is the <b>default premium</b>)</li><li><b>Foreign interest rates and the exchange rate</b></li><li><b>Central bank credibility</b></li><li><b>Inflation</b></li></ul>"],
    ["Distinguish nominal from real interest rates.", "The <b>nominal</b> rate is one where the effects of inflation have <b>NOT been removed</b> — the rate charged on a loan or quoted on a GIC or T-bill. The <b>real interest rate = nominal rate − expected inflation rate</b>."],
    ["How do higher interest rates affect the economy?", "They <b>raise the cost of capital</b>, reducing profitable business investment; they <b>discourage consumer spending</b> on houses and major durables bought on credit, encouraging saving; and they <b>reduce income available for other items</b> by increasing debt-servicing costs. Net effect: <b>negative for growth</b>."],
    ["What are the three functions of money?", "<b>Medium of exchange</b> (otherwise goods must be bartered), <b>unit of account</b> (so we know exactly what things cost), and <b>store of value</b> (no expiration date — the more stable its value, the better the store)."],
    ["When is a price increase NOT inflation?", "When it is a <b>one-time jump</b> — an oil price rise or a new sales tax — that does <b>not feed into wages and other costs</b> and initiate a wage-price spiral. A rise in the price of <b>one product</b> is also not inflation; it may be a relative price change reflecting scarcity."],
    ["Describe the CPI.", "The <b>Consumer Price Index</b> — the most widely used inflation indicator and a measure of the <b>cost of living</b> in Canada. Statistics Canada tracks the retail price of a basket of <b>600 different goods and services</b>, each <b>weighted</b> to reflect typical consumer spending. Base year <b>2002 = 100</b>."],
    ["Give the inflation rate formula and run the text's example.", "<b>(CPI<sub>current</sub> − CPI<sub>previous</sub>) ÷ CPI<sub>previous</sub> × 100</b><br>December 2023 CPI was <b>158.3</b>, December 2022 was <b>153.1</b>:<br>(158.3 − 153.1) ÷ 153.1 × 100 = 0.033964 = <b>3.4%</b>"],
    ["List the costs of inflation.", "<ul><li><b>Erodes the standard of living</b> of those on fixed incomes and without wage bargaining power</li><li><b>Reduces the real value of investments</b> such as fixed-rate loans — repaid in dollars that buy less</li><li><b>Distorts the signal prices send</b>, making relative price changes hard to read</li><li>Accelerating inflation usually brings <b>rising interest rates and a recession</b></li></ul>"],
    ["Define the output gap and both of its directions.", "The difference between <b>real GDP</b> (actual output) and <b>potential GDP</b> (what the economy can produce with inputs fully employed). <b>Negative gap</b>: output below potential, <b>spare capacity</b>, inflation <b>falls or stays steady</b>. <b>Positive gap</b>: output above potential, operating <b>above capacity</b>, <b>upward pressure on inflation</b>."],
    ["Distinguish demand-pull from cost-push inflation.", "<b>Demand-pull</b> comes from the <b>demand side</b> — firms operating well above normal capacity raise prices in response to strong consumer demand. <b>Cost-push</b> comes from the <b>supply side</b> — higher wages or raw material costs push production costs up, so firms raise prices and produce a <b>smaller amount</b>."],
    ["Define disinflation and deflation — and do not mix them up.", "<b>Disinflation</b> is a <b>decline in the RATE at which prices rise</b>. Prices are <b>still rising, but at a slower rate</b>. <b>Deflation</b> is a <b>sustained fall in prices</b> where the annual change in the CPI is <b>negative year after year</b> — the opposite of inflation."],
    ["What does the Phillips curve say?", "When <b>unemployment is low, inflation tends to be high</b>; when <b>unemployment is high, inflation tends to be low</b>. Lower unemployment is achieved in the short run by <b>increasing inflation faster</b>; lower inflation is achieved at the cost of <b>possibly increased unemployment and slower growth</b>."],
    ["Define the sacrifice ratio and give Canada's figure.", "The extent to which <b>GDP must be reduced, with increased unemployment, to achieve a 1% decrease in the inflation rate</b>. In Canada experts suggest it is <b>as high as 4</b> — <b>4% of output sacrificed to bring inflation down 1%</b>."],
    ["Why is deflation dangerous?", "Sustained falling prices lead to <b>declining corporate profits</b>. Businesses sell at lower prices, cut production costs and wages, and may lay off workers. <b>Unemployment rises, growth slows</b>, consumers shift from spending to saving, and falling profits <b>negatively impact stock prices</b>."],
    ["Define monetary policy and state its goal.", "<b>Regulation of the money supply and available credit</b> for the purpose of promoting <b>sustained economic growth and price stability</b>. Its goal is to maintain the <b>value of our currency and our economic health</b>. Conducted by the <b>Bank of Canada</b>."],
    ["Who administers monetary policy, and who is ultimately responsible for it?", "The Bank of Canada <b>administers policy independently</b>, without day-to-day government intervention — but the <b>thrust of policy is the ultimate responsibility of the elected government</b>."],
    ["Operating band is 1% to 1.5%. Give the overnight rate target and the Bank Rate.", "The <b>overnight rate target is the MID-POINT = 1.25%</b>. The <b>Bank Rate is the UPPER LIMIT = 1.5%</b>. The band is currently <b>50 basis points</b> wide."],
    ["Define the Bank Rate.", "The <b>minimum rate at which the Bank of Canada will lend money on a short-term basis</b> to the chartered banks and other members of <b>Payments Canada</b>, in its role as <b>lender of last resort</b>. It is the <b>upper limit of the operating band</b>."],
    ["The Bank of Canada buys bonds in the market. Trace the effects.", "Bond <b>prices rise</b> → <b>interest rates fall</b> → the <b>money supply increases</b>. This is <b>expansionary</b> policy. Selling bonds does the reverse: prices fall, rates rise, money supply decreases — <b>contractionary</b>."],
    ["Distinguish a drawdown from a redeposit.", "<b>Drawdown</b>: deposits transferred <b>TO the Bank of Canada FROM the chartered banks</b> — drains cash balances, contracts loans, <b>upward pressure on interest rates</b>. <b>Redeposit</b>: funds transferred <b>FROM the Bank of Canada TO the chartered banks</b> — increases deposits and reserves, <b>downward pressure on rates</b>."],
    ["Define fiscal policy and both of its directions.", "A <b>deliberate action by government</b> (federal, provincial or territorial) to influence the economy through changes in <b>spending or taxation</b>. <b>Expansionary</b>: increase spending or decrease taxes. <b>Contractionary</b>: decrease spending or increase taxes."],
    ["Which type of government spending is recorded in GDP?", "Only the <b>purchase of goods or services</b> — such as building a new highway. <b>Transfers of money to citizens</b>, such as social security cheques, are <b>NOT</b> recorded as government spending in GDP."],
    ["Name the five main types of taxes.", "<ul><li><b>Direct</b> — on the income of individuals and companies</li><li><b>Sales</b> — value-added such as the GST, and excise such as on liquor</li><li><b>Payroll</b> — levied as a share of wages</li><li><b>Capital</b> — on the size of a company's assets or capital</li><li><b>Property</b> — on residential and commercial property</li></ul>"],
    ["What are the two components of the balance of payments?", "The <b>current account</b> (exchange of goods and services, earnings from investment income, and net transfers such as foreign aid) and the <b>capital and financial account</b> (financial flows related to investments by foreigners in Canada and by Canadians abroad)."],
    ["What is the key difference between current and capital account transactions?", "<b>Capital and financial account transactions result in the acquisition of an ASSET and the right to any income it earns.</b> Buying a <b>computer</b> made in Canada is a <b>current account</b> transaction; buying <b>the company that made the computer</b> is a <b>capital and financial account</b> transaction."],
    ["A falling Canadian dollar — what happens to exports and imports?", "It <b>lowers the price of Canadian exports</b> in foreign markets and <b>raises the price of imports</b> in Canada. This <b>boosts exports and depresses imports</b>. A <b>rising</b> Canadian dollar has the <b>opposite effect</b>."],
    ["Roughly what share of Canadian GDP is exports, and what was it in the 1960s?", "Approximately <b>30% of GDP</b> today, compared with about <b>20% in the 1960s</b> — which is why the economic performance of our trading partners matters so much to Canadian growth."]
  ],

  quiz: [
    ["Which of the following is a macroeconomic question?", ["Why did total output shrink last quarter?", "How do minimum wage laws affect the supply of labour at a firm?", "How would a tax on softwood lumber imports affect the forestry industry?", "Will consumers stop buying mutual funds if they are taxed?"], 0, "Macroeconomics focuses on the economy as a whole — total output, jobs across the economy, interest rates and standards of living. The other three concern individual firms, industries or consumer decisions, which is microeconomics."],
    ["GDP is defined as the market value of:", ["All goods and services produced anywhere by a country's citizens", "All final goods and services produced within a country in a given time period", "All goods, including intermediate goods, produced within a country", "All final goods produced, excluding services"], 1, "GDP is the market value of all FINAL goods and services produced WITHIN a country in a given time period. Intermediate goods are excluded to avoid overstating output."],
    ["Under the expenditure approach, GDP equals:", ["C + I − G + (X − M)", "C + I + G + (M − X)", "C + I + G + (X − M)", "C × I × G × (X − M)"], 2, "GDP = personal consumption + investment + government spending + net exports (exports less imports)."],
    ["Nominal GDP grew 4.4% and prices rose 1.1%. Real economic growth was approximately:", ["3.3%", "4.4%", "5.5%", "1.1%"], 0, "Real growth = nominal growth less the price change: 4.4% − 1.1% = 3.3%."],
    ["Which phase of the business cycle features rising interest rates, falling bond prices and falling stock prices?", ["Expansion", "Peak", "Trough", "Recovery"], 1, "At the peak, demand outstrips capacity, inflation rises, interest rates rise and bond prices fall, and stock prices fall as business sales decline."],
    ["At the trough of the business cycle:", ["Interest rates fall, triggering a bond rally", "Interest rates rise and bonds sell off", "Inflation accelerates", "Business investment surges"], 0, "At the trough, interest rates fall triggering a bond rally, inflation falls, consumers begin to spend again and stock prices rally."],
    ["A contraction is considered a recession when it lasts at least:", ["One quarter", "Twelve months", "Three consecutive quarters", "Two consecutive quarters"], 3, "The popular definition of a recession is at least two consecutive quarters of declining real GDP, though Statistics Canada also weighs depth, duration and diffusion."],
    ["Which of the following is a LAGGING indicator?", ["Housing starts", "Stock prices", "Unemployment", "Retail sales"], 2, "Unemployment is a lagging indicator — it changes after the economy does and confirms a business cycle pattern. Housing starts and stock prices lead; retail sales is coincident."],
    ["Which of the following is a COINCIDENT indicator?", ["Manufacturers' new orders", "The money supply", "Labour costs", "Personal income"], 3, "Personal income is coincident, alongside GDP, industrial production and retail sales. New orders and money supply lead; labour costs lag."],
    ["The working-age population in Canada is defined as those aged:", ["16 years and older", "18 years and older", "15 to 64 years", "15 years and older"], 3, "Statistics Canada defines the working-age population as individuals aged 15 years and older."],
    ["Discouraged workers are:", ["Counted as unemployed in the labour force", "Excluded from the labour force, which can understate unemployment", "Counted as employed part-time", "Included in the participation rate but not the unemployment rate"], 1, "Discouraged workers are available and willing to work but have not looked for a job in the previous month. They are not part of the labour force, so their disappearance can produce an artificially low unemployment rate."],
    ["A worker cannot find a job because they lack the skills employers need and would have to retrain. This is:", ["Frictional unemployment", "Cyclical unemployment", "Seasonal unemployment", "Structural unemployment"], 3, "Structural unemployment occurs when workers lack the necessary skills, do not live where jobs are available, or will not work at the offered wage. With frictional unemployment the worker already has the required skills."],
    ["When the actual unemployment rate is BELOW the natural rate:", ["A worker shortage contributes to wage gains and higher inflation", "Excess workers weaken bargaining power and inflation is held in check", "The output gap is necessarily negative", "Deflation becomes likely"], 0, "Below the natural rate, a shortage of workers contributes to increased wage gains and higher inflation. Above the natural rate, excess supply keeps inflation in check."],
    ["The real interest rate equals:", ["The nominal rate plus expected inflation", "The nominal rate minus expected inflation", "The Bank Rate minus the overnight rate", "The nominal rate divided by the CPI"], 1, "The real interest rate is the nominal interest rate minus the expected inflation rate. A nominal rate is one where the effects of inflation have not been removed."],
    ["The CPI was 158.3 in December 2023 and 153.1 in December 2022. The inflation rate over the period was approximately:", ["5.2%", "1.6%", "3.4%", "58.3%"], 2, "(158.3 − 153.1) ÷ 153.1 × 100 = 3.4%. The 58.3% figure is how much more the basket cost than in the 2002 base year, not the annual rate."],
    ["Prices are still rising, but at a slower rate than last year. This is:", ["Deflation", "Demand-pull inflation", "Disinflation", "A negative output gap by definition"], 2, "Disinflation is a decline in the RATE at which prices rise — prices are still rising, just more slowly. Deflation means prices are actually falling, with the annual CPI change negative."],
    ["A positive output gap means:", ["Actual output is below potential and inflation will fall", "Potential GDP has declined", "The economy is in recession", "Actual output is above potential, placing upward pressure on inflation"], 3, "A positive output gap means actual output exceeds potential output — the economy is operating above capacity, scarce labour fuels wage increases and inflation pressure builds."],
    ["Higher production costs from rising wages or raw materials lead firms to raise prices. This is:", ["Cost-push inflation", "Demand-pull inflation", "Disinflation", "A wage-price spiral by definition"], 0, "Cost-push inflation originates on the supply side: higher costs push prices up and firms produce a smaller amount. Demand-pull comes from strong consumer demand against limited capacity."],
    ["Canada's sacrifice ratio is estimated to be as high as 4. This means:", ["Inflation falls 4% for every 1% of output sacrificed", "4% of output must be sacrificed to reduce inflation by 1%", "Unemployment rises 4% when inflation rises 1%", "The Bank Rate must rise 4% to cut inflation 1%"], 1, "The sacrifice ratio describes the extent to which GDP must be reduced, with increased unemployment, to achieve a 1% decrease in the inflation rate. In Canada that is estimated at as high as 4."],
    ["If the Bank of Canada's operating band is 1% to 1.5%, the target for the overnight rate is:", ["1.0%", "1.25%", "1.5%", "0.5%"], 1, "The Bank targets the MID-POINT of the operating band, which is 1.25%. The Bank Rate is the UPPER limit, 1.5%."],
    ["The Bank Rate is best described as:", ["The minimum rate at which the Bank of Canada lends short-term to chartered banks and Payments Canada members", "The rate banks charge their best customers", "The mid-point of the operating band", "The average of overnight market trades"], 0, "The Bank Rate is the minimum rate at which the Bank of Canada will lend short-term to the chartered banks and other Payments Canada members in its role as lender of last resort. It is the upper limit of the operating band."],
    ["If the Bank of Canada BUYS bonds in the open market, the result is:", ["Bond prices fall, rates rise, money supply decreases", "No effect on the money supply", "Bond prices rise, rates rise, money supply decreases", "Bond prices rise, rates fall, money supply increases"], 3, "Buying bonds raises their price, which causes interest rates to fall and the money supply to increase — an expansionary policy."],
    ["A drawdown refers to:", ["The Bank of Canada purchasing government bonds", "A transfer of funds from the Bank of Canada to the chartered banks", "A transfer of deposits to the Bank of Canada from the chartered banks", "A reduction in the Bank Rate"], 2, "A drawdown transfers deposits TO the Bank of Canada FROM the chartered banks, draining cash balances, contracting loans and placing upward pressure on interest rates. A redeposit is the reverse."],
    ["Which is an example of expansionary FISCAL policy?", ["The Bank of Canada lowers the Bank Rate", "The Bank of Canada buys bonds", "The government cuts health care spending", "The government cuts business taxes to encourage hiring"], 3, "Fiscal policy is government action on spending or taxation. Cutting business taxes to encourage hiring is expansionary fiscal policy. The first two are monetary policy; the last is contractionary."],
    ["Which type of government outlay is recorded as government spending in GDP?", ["Social security cheques to citizens", "Building a new highway", "Employment insurance transfers", "Tax rebates"], 1, "Only the purchase of goods or services — such as building a new highway — is recorded as government spending in GDP. Transfers of money to citizens are not."],
    ["Buying the company that manufactures computers in Canada is recorded in:", ["The current account", "Net exports", "The capital and financial account", "Personal consumption"], 2, "Capital and financial account transactions result in the acquisition of an asset and the right to any income it earns. Buying the computer itself would be a current account transaction."],
    ["A falling Canadian dollar generally:", ["Boosts exports and depresses imports", "Depresses exports and boosts imports", "Has no effect on trade flows", "Raises the price of Canadian exports abroad"], 0, "A falling Canadian dollar lowers the price of Canadian exports in foreign markets and raises the price of imports, so it boosts exports and depresses imports."],
    ["Which of the following is NOT one of the three functions of money?", ["Medium of exchange", "Unit of account", "Source of capital", "Store of value"], 2, "Money functions as a medium of exchange, a unit of account and a store of value. The only source of capital is savings — a separate concept from Chapter 2."]
  ]
};
