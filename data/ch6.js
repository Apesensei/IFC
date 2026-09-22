window.IFC = window.IFC || {};
window.IFC[6] = {
  n: 6,
  section: "Investment Funds in Canada · Section 2 · Chapter 6",
  shortTitle: "Tax and Retirement Planning",
  title: "Tax and Retirement&nbsp;Planning",
  lede: "The densest chapter in the course so far and the most calculation-heavy. Six objectives, nine plan types, four pension formulas and a dozen dollar limits. Learn the formulas cold — this is the one chapter where you can lose marks purely on arithmetic.",
  footer: "Distilled from <em>Investment Funds in Canada</em>, Section 2, Chapter 6 (CSI, 2024). Study aid only — not a substitute for the official text.",

  method: {
    title: "How to beat Chapter 6",
    sub: "Formulas first, limits second, features last",
    steps: [
      "<b>Learn the three taxation rules before anything else.</b> Interest is taxed in full at your marginal rate. Eligible Canadian dividends are <b>grossed up 38%</b> then get a federal <b>DTC of 15.02%</b> of that grossed-up amount. Capital gains are <b>50% taxable</b>. Every tax question in this chapter is one of those three, and Tables 6.2 and 6.3 are just those three rules run at two different rates.",
      "<b>Memorise the two &ldquo;lesser of&rdquo; formulas — they are nearly identical and they get swapped.</b> <b>RRSP</b> = lesser of <b>18% of the PREVIOUS year's earned income</b> and the RRSP dollar limit, minus PA and PSPA, plus unused room. <b>DCP</b> = lesser of <b>18% of the CURRENT year's compensation</b> and the DC limit. Previous vs. current year is the trap.",
      "<b>Drill the four pension formulas until they are automatic.</b> Flat benefit = $ per month × years. Career average = % × career average salary × years. Final average = % × final average earnings × years. All three are one multiplication — the marks are lost by grabbing the wrong salary figure, not by failing the arithmetic.",
      "<b>Build a limits table and rehearse it daily.</b> RRSP $31,560 · DC $32,490 · TFSA 2024 $7,000 · TFSA cumulative $95,500 · RESP lifetime $50,000 · CESG lifetime $7,200 · over-contribution cushion $2,000 · OAS clawback threshold $90,997. These are pure recall and they are free marks.",
      "<b>Learn the ages as a sequence:</b> <b>18</b> to open a TFSA · <b>21</b> beneficiary age in the RESP income-withdrawal test · <b>60</b> earliest CPP · <b>65</b> standard CPP and OAS · <b>70</b> latest CPP · <b>71</b> mandatory RRSP de-registration · <b>75</b> OAS increases 10% · <b>95</b> RRIF factor caps at 20%.",
      "<b>Do the deductible / not-deductible carrying charge list last, but do it.</b> It is a pure list, it is counterintuitive (RRSP admin fees and financial planning fees are <b>not</b> deductible), and it makes an easy &ldquo;which of the following is NOT&rdquo; question."
    ],
    flag: {
      label: "Where the marks actually are",
      text: "In rough order of exam weight: <b>the three forms of investment income and how each is taxed</b>, <b>the RRSP contribution limit calculation</b>, <b>defined benefit vs. defined contribution and the three DB sub-types</b>, <b>TFSA contribution and withdrawal mechanics</b>, and <b>RESP/CESG limits</b>. RRIFs, LIRAs and PRPPs are lighter — learn their distinguishing feature and move on."
    }
  },

  objectives: [
    {
      tag: "Objective 1",
      title: "How investment income is taxed",
      blocks: [
        { points: [
          "The federal government imposes income taxes by federal statute — the <b>Income Tax Act (ITA)</b>. All provinces have separate statutes imposing provincial income tax on residents and on non-residents who conduct business or have a permanent establishment there.",
          "The federal government collects provincial income taxes for all provinces <b>except two</b>: <b>Quebec</b>, which administers its own income tax on <b>both individuals and corporations</b>; and <b>Alberta</b>, which administers its own income tax on <b>corporations</b>.",
          "Canada imposes income tax on the <b>world income of its residents</b>, as well as certain types of Canadian-source income on non-residents.",
          "<b>Taxation year:</b> individuals use the <b>calendar year</b>; corporations may choose any <b>fiscal year</b> as long as it is consistent year over year. <b>No corporate taxation year may be longer than 53 weeks.</b>",
          "<b>Tax avoidance is completely legitimate</b> (tax evasion is not) by means of: full utilization of allowable deductions; conversion of non-deductible expenses into tax-deductible expenditures; postponing the receipt of income; splitting income with other family members when handled properly; and selecting investments that provide a better after-tax rate of return.",
          "Caution: <b>minimization of tax must not become the sole objective</b>. Choosing an investment based solely on low tax status makes no sense if the end result is a <b>lower after-tax rate of return</b> than a more heavily taxed alternative."
        ]},
        { table: {
          caption: "The four steps of calculating income tax",
          head: ["#", "Step"],
          rows: [
            ["1", "Calculating <b>all sources of income</b> from employment, business and investments"],
            ["2", "Making <b>allowable deductions</b> to arrive at <b>taxable income</b>"],
            ["3", "Calculating the <b>gross or basic tax payable</b> on taxable income"],
            ["4", "Claiming <b>various tax credits</b>, if any, and calculating the <b>net tax payable</b>"]
          ],
          numCol: 0
        }},
        { table: {
          caption: "The four general types of income",
          head: ["Type", "How it is treated"],
          rows: [
            ["<b>Employment income</b>", "Taxed on a <b>GROSS RECEIPT basis</b> — the taxpayer <b>cannot deduct all related costs</b> of earning income as a business does. Employees may deduct a few items: <b>pension contributions, union dues, childcare expenses</b> and other minor items."],
            ["<b>Capital property income</b>", "Assets purchased <b>solely for investment purposes</b> — stocks, bonds, mutual funds. Income from these (dividends, interest) is <b>income from capital property</b>."],
            ["<b>Business income</b>", "Profit from <b>producing and selling goods or rendering services</b>. <b>Self-employment income falls here.</b> Taxed on a <b>NET-INCOME basis</b>."],
            ["<b>Capital gains and losses</b>", "The gain or loss from the <b>sale of capital property</b>. A gain occurs when property is sold <b>above</b> its original cost (a loss, below). <b>Costs of the sale or disposition are included</b> in arriving at the gain or loss."]
          ]
        }},
        { table: {
          caption: "Table 6.1 — federal income tax rates for 2024",
          head: ["Portion of taxable income", "Rate"],
          rows: [
            ["$55,867 or less", "<b>15%</b>"],
            ["Over $55,567 and up to $111,733", "<b>20.5%</b>"],
            ["Over $111,733 and up to $173,205", "<b>26%</b>"],
            ["Over $173,205 and up to $246,752", "<b>29%</b>"],
            ["Over $246,752", "<b>33%</b>"]
          ]
        }},
        { flag: {
          label: "A discrepancy in the textbook itself — don't let it rattle you",
          text: "Table 6.1's first band ends at <b>$55,867</b> while the second begins above <b>$55,567</b> — the two figures do not match, and the CESG table later in the chapter also uses <b>$55,567</b>. This is an inconsistency in the 2024 text, not something you have misread. <b>Learn the five rates (15 / 20.5 / 26 / 29 / 33) — those are what get tested</b>, and if a threshold appears in a question, expect it to use the textbook's own number."
        }},
        { points: [
          "<b>Marginal tax rate</b> = adding the provincial rate to the federal rate gives the taxpayer's <b>combined marginal tax rate</b> — <b>the rate that would have to be paid on any ADDITIONAL dollars of taxable income earned</b>.",
          "As long as an investment is held <b>in a registered plan</b>, tax does not apply on revenues generated. For investments <b>not</b> in registered plans, taxpayers report income annually.",
          "There are <b>three different forms of revenue</b> from mutual funds and <b>each is taxed differently</b>: <b>interest income</b> generated by fixed-income securities held in the fund; <b>dividends</b> generated by preferred and some common shares held in the fund; and <b>capital gains</b> generated when the fund and/or a security held in it is sold for more than its cost.",
          "When mutual funds are held <b>outside</b> a registered plan, the unitholder is sent a <b>T3 form or a T5 form</b> by the fund, reporting foreign income, Canadian interest, dividends and capital gains — <b>including dividends that have been reinvested</b>. Each is taxed at the fund holder's <b>personal rate in the year received</b>."
        ]},
        { table: {
          caption: "The three forms of investment income — the core of the chapter",
          head: ["Form", "Tax treatment", "Worked example"],
          rows: [
            ["<b>Interest income</b>", "Reported on an <b>annual ACCRUAL basis, regardless of whether the cash is actually received</b>. Taxed as <b>regular income</b> and <b>not subject to any preferential tax treatment</b>. (From CSBs, GICs, bonds.)", "$1,000 at a 29% marginal rate → <b>$290</b> federal tax owed"],
            ["<b>Eligible Canadian dividends</b>", "Preferential treatment reflecting that corporations pay dividends from <b>after-tax income</b>. The amount is <b>grossed up by 38%</b> to arrive at the <b>taxable amount of the dividend</b>; the taxpayer then receives a federal <b>dividend tax credit (DTC) of 15.02%</b> of that taxable amount. DTCs also exist at varying <b>provincial</b> levels.", "$300 dividend → <b>$414</b> taxable ($300 × 138%); gross-up is <b>$114</b>. DTC = 15.02% × $414 = <b>$62.18</b>. At 26%: tax = $107.64; <b>net tax = $45.46</b>"],
            ["<b>Capital gains</b>", "<b>Only 50% of the capital gain is taxable.</b>", "$300 gain → report <b>$150</b>. At 26%: tax = <b>$39</b> ($300 × 50% × 26%)"],
            ["<b>Foreign dividends</b>", "Taxed <b>generally the same as interest income</b> — i.e. as regular income, <b>no dividend tax credit</b>. Investors usually receive a <b>net</b> amount because <b>non-resident withholding taxes</b> are applied at source. They may use <b>foreign tax credits</b> to offset Canadian tax — the allowable credit is essentially the <b>LESSER of the foreign tax paid or the Canadian tax payable on the foreign income</b>, subject to adjustments.", "—"]
          ]
        }},
        { table: {
          caption: "Tables 6.2 and 6.3 — the same $1,000 at two different marginal rates",
          head: ["", "Interest", "Canadian dividend", "Capital gains"],
          rows: [
            ["Income received", "$1,000.00", "$1,000.00", "$1,000.00"],
            ["Taxable income", "$1,000.00", "<b>$1,380.00</b> (grossed up 38%)", "<b>$500.00</b> (50%)"],
            ["<b>At a 29% marginal rate</b> — federal tax", "$290.00", "$400.20", "$145.00"],
            ["<em>Less</em> DTC (15.02%)", "—", "$207.28", "—"],
            ["<b>Federal tax owed at 29%</b>", "<b>$290.00</b>", "<b>$192.92</b>", "<b>$145.00</b>"],
            ["<b>At a 15% marginal rate</b> — federal tax", "$150.00", "$207.00", "$75.00"],
            ["<em>Less</em> DTC (15.02%)", "—", "$207.28", "—"],
            ["<b>Federal tax owed at 15%</b>", "<b>$150.00</b>", "<b>$0.00</b>", "<b>$75.00</b>"]
          ]
        }},
        { flag: {
          label: "The point of those two tables",
          text: "<b>Depending on the tax rate, the tax on Canadian dividends can be higher or lower than the tax payable on capital gains.</b> At <b>29%</b>, tax on capital gains (<b>$145</b>) is <b>lower</b> than on the same amount of dividends (<b>$192.92</b>). But at <b>15%</b>, taxes owed on dividends are <b>nil</b> compared with <b>$75</b> on capital gains. <b>In both cases there is a substantial difference between the tax owed on interest and the tax owed on capital gains and dividends.</b>"
        }},
        { table: {
          caption: "Carrying charges — deductible vs. NOT deductible",
          head: ["Deductible", "NOT deductible"],
          rows: [
            ["<b>Interest paid on funds borrowed to earn investment income</b> such as interest and dividends", "<b>Interest paid on funds borrowed to buy investments that can generate CAPITAL GAINS ONLY</b>"],
            ["<b>Fees for certain investment advice</b>", "<b>Brokerage fees or commissions</b> paid to buy or sell securities — instead these <b>affect the cost base</b> of the investment"],
            ["<b>Fees paid for management, administration, or safe custody</b> of investments", "<b>Interest on funds borrowed to contribute</b> to an RRSP, RESP, RDSP or TFSA"],
            ["<b>Accounting fees</b> paid for the recording of investment income", "<b>Administration, counselling and trustee fees</b> for a regular or self-directed <b>RRSP or RRIF</b>"],
            ["—", "<b>Fees paid for advice such as financial planning</b>"],
            ["—", "<b>Safety deposit box charges</b>"]
          ]
        }},
        { flag: {
          label: "Borrowed funds — the three conditions",
          text: "A taxpayer may deduct interest paid on funds borrowed to purchase securities if: <b>(1)</b> the taxpayer has a <b>legal obligation to pay the interest</b>; <b>(2)</b> the <b>purpose of borrowing is to earn income</b>; and <b>(3)</b> the <b>income produced from the securities purchased is not tax exempt</b>. For <b>convertible debentures</b>, normally <b>all</b> carrying charges are deductible, since the debentures may be converted into common shares which could theoretically pay <b>unlimited dividends</b>."
        }}
      ]
    },
    {
      tag: "Objective 2",
      title: "Government pension plans — CPP, QPP and OAS",
      blocks: [
        { points: [
          "There are <b>two main types of pension plan</b> in Canada: <b>government pension plans</b> and <b>employer-sponsored plans</b>. Government plans include the <b>Canada Pension Plan, the Québec Pension Plan, and Old Age Security</b>. Withdrawals from both government and employer-sponsored plans may begin <b>only after retirement</b>.",
          "<b>Every resident in Canada earning income from employment or self-employment is required to contribute</b> to one of two government-sponsored plans depending on province of residence: residents of all provinces <b>except Quebec</b> contribute to the <b>CPP</b>; residents of <b>Quebec</b> contribute to the <b>QPP</b>.",
          "<b>Contributions to CPP or QPP are automatic</b>, and the right to a pension based on years of contribution is <b>irrevocable</b> — it is <b>paid out even if the contributor leaves Canada</b>.",
          "Contributors may receive a <b>monthly retirement pension for life beginning at age 65</b>. You can apply to start at <b>age 60</b>, but the amount is <b>reduced</b> by a certain percentage for each month you are under 65. You can <b>postpone until age 70</b>, in which case the monthly pension is <b>increased</b> by a certain percentage for each month you are over 65.",
          "<b>Example:</b> Bill turns 60 and retires, choosing to receive CPP early. His payments would have been <b>$500 a month at 65</b>, but he will receive <b>$320 a month</b> instead.",
          "For many retirees the CPP or QPP amount <b>must be supplemented</b> with other retirement savings — which is why Canadians are encouraged to save throughout their working years, join a company pension plan, and contribute to an RRSP."
        ]},
        { table: {
          caption: "Old Age Security — qualifying for a full pension",
          head: ["Rule", "Requirement"],
          rows: [
            ["<b>Who</b>", "Payable to <b>all Canadian citizens and legal residents</b> who have reached a minimum age"],
            ["<b>Full pension — standard test</b>", "Resident in Canada for <b>at least 40 years after reaching age 18</b>; <b>AND</b> resident for an <b>uninterrupted 10 years immediately preceding</b> the application"],
            ["<b>Full pension — alternative test</b>", "If they did not live in Canada for the last 10 years, they may still qualify if they <b>lived in Canada for the full year immediately before the application was approved</b>; <b>AND</b> lived or were present in Canada for <b>at least three years for each year of absence</b> during that 10-year period"],
            ["<b>Age 75 increase</b>", "Starting in <b>July 2022</b>, when an OAS pensioner reaches <b>age 75</b>, their OAS entitlement <b>increases by 10%</b>"],
            ["<b>Applying</b>", "Benefits are <b>not paid until application has been made and approved</b>. Apply <b>six months prior to eligibility</b>. <b>Proof of age and legal residence status</b> required. Payments normally begin the <b>month following</b> the month the applicant meets the age and residence requirements. Late applications may be paid <b>retroactively for up to 12 months</b>"]
          ]
        }},
        { flag: {
          label: "The OAS clawback",
          text: "A provision in the <b>Income Tax Act</b> requires higher-income Canadians to <b>repay all or part of the social benefits</b> they receive in any year. This repayment is called a <b>&ldquo;clawback,&rdquo;</b> and <b>OAS payments are a social benefit that falls into this category</b>.<br><br>For the <b>2024</b> income year the clawback starts at an income threshold of <b>$90,997</b>. You must pay back <b>15% of every dollar above this threshold</b>. There is also a maximum income level: if a recipient aged <b>65 to 74</b> has net income of approximately <b>$148,065</b>, <b>all OAS benefits are paid back</b>. For individuals <b>age 75 and older</b>, that maximum income level is <b>almost 4% higher</b>."
        }}
      ]
    },
    {
      tag: "Objective 3",
      title: "Employer-sponsored registered pension plans",
      blocks: [
        { points: [
          "Employer-sponsored plans are called <b>registered pension plans (RPPs)</b>. <b>The employer's role in contributing is what distinguishes them</b> from both government pension plans and RRSPs.",
          "An <b>RPP</b> is a <b>trust, registered with the Canada Revenue Agency or the appropriate provincial agency, established by a company to provide pension benefits for its employees when they retire</b>. <b>Both employer and employee contributions are tax-deductible.</b>",
          "<b>Two types of RPP:</b> <b>defined benefit plans (DBP)</b> and <b>defined contribution plans (DCP)</b>.",
          "In a <b>DBP</b>, the <b>benefits are predetermined</b> based on a formula including <b>years of service, income level and other variables</b>, and the <b>contributions are designed to match</b> the predetermined benefits.",
          "In a <b>DCP</b> — also known as a <b>money purchase plan</b> — the <b>contributions are predetermined</b> and the <b>benefits at retirement depend on how the contributions were invested</b>.",
          "<b>Three types of defined benefit plan:</b> <b>flat benefit plans</b>, <b>career average plans</b>, and <b>final average plans</b>. <b>They differ only in the criteria chosen to calculate benefits.</b>"
        ]},
        { table: {
          caption: "The three defined benefit formulas — learn each as one multiplication",
          head: ["Plan", "Formula and definition", "Worked example"],
          rows: [
            ["<b>Flat benefit</b>", "The <b>simplest</b> type. The monthly pension is a <b>specified dollar amount of pension for each year of service</b>. Common among <b>unionized employees where wage levels are generally uniform</b>.<br><b>$ per month × years of service</b>", "$15/month × 30 years = <b>$450/month</b><br><b>Jennifer:</b> $25/month × 30 years = <b>$750/month</b>"],
            ["<b>Career average</b>", "The pension is a <b>percentage of an employee's earnings over the course of her career</b> (while in the plan). Employees may contribute a <b>fixed percentage of salary</b> (such as 5%). <b>Employer contributions are NOT fixed</b> — they vary with <b>investment yield, mortality and employee turnover</b>.<br><b>% × career average salary × years of service</b>", "2% × $1,000/month × 30 years = <b>$600/month</b><br><b>Andrew:</b> $48,000 × 2% × 30 = <b>$28,800/year</b> = <b>$2,400/month</b>"],
            ["<b>Final average</b>", "Based on <b>length of service and average earnings over a STATED PERIOD</b> rather than the lifetime of service. Often the average of the <b>best five consecutive years in the last 10</b>, or the <b>best three consecutive years in the last five</b>. <b>Using the best average years is preferred in case earnings drop close to retirement.</b><br><b>% × final average earnings × years of service</b>", "<b>Chris:</b> best 3 of last 5 = $52,000, $54,000, $56,000 → average <b>$54,000</b>. $54,000 × 1.5% × 30 = <b>$24,300/year</b> = <b>$2,025/month</b>"]
          ]
        }},
        { table: {
          caption: "Advantages and disadvantages of each plan type",
          head: ["Plan", "Advantages", "Disadvantages"],
          rows: [
            ["<b>Flat benefit</b>", "Normally funded <b>entirely by the employer</b>; benefit levels usually increase through <b>ongoing employee-employer negotiations</b>; the <b>formula is easy to understand</b>; paid <b>IN ADDITION to OAS and CPP/QPP</b> benefits", "Does <b>not differentiate among the earnings levels</b> of plan participants; the amount <b>must be continually renegotiated to keep pace with inflation</b>"],
            ["<b>Career average</b>", "<b>Easily integrated with CPP/QPP</b> — a lower percentage on earnings up to the CPP/QPP maximum and a higher percentage above it; gives <b>equal weight to earnings throughout service</b>; many companies <b>update benefits by moving the base year forward</b> (e.g. moving it to 2021 means all prior service is based on 2021 earnings)", "Like the flat benefit plan, the pension <b>may be eroded by inflation</b> if regular updates are not made"],
            ["<b>Final average</b>", "<b>Easily integrated with CPP/QPP</b>; by basing the pension on earnings <b>near retirement</b>, provides <b>better protection against inflation at least up to retirement</b>; usually pays a <b>HIGHER pension than a career average plan</b>", "If the contributor's <b>earnings decline as retirement approaches</b>, a <b>lower pension payment may result</b>"],
            ["<b>Defined contribution</b>", "<b>Popular with small employers</b> — easy to understand, easy to administer, <b>fixed annual costs</b>; regulations are <b>not as onerous</b> as for defined benefit plans; employees can usually <b>direct funds to their choice of investment vehicles</b>", "<b>The final pension amount is unknown until retirement</b>; may be <b>smaller than expected if investment performance has been poor</b>; members retiring under <b>similar circumstances may receive substantially different pensions</b>"]
          ]
        }},
        { flag: {
          label: "Two rules to keep straight",
          text: "<b>DCP contribution cap:</b> combined employer/employee contributions cannot exceed the <b>LESSER</b> of <b>18% of the employee's CURRENT year compensation</b> and the <b>defined contribution limit for the year — $32,490 in 2024</b> (indexed annually to inflation).<br><br><b>Leaving a DBP early:</b> the full benefit may only be available to those achieving a <b>minimum level of service, such as 25 years</b>. Employees who leave before that may receive a <b>lump sum usually transferred into a locked-in retirement account (LIRA)</b>. Amounts transferred into a LIRA are <b>locked in and cannot be withdrawn — they can only be used for retirement income</b>."
        }}
      ]
    },
    {
      tag: "Objective 4",
      title: "RRSPs, RRIFs and locked-in plans",
      blocks: [
        { points: [
          "<b>The principle of tax deferral plans is to encourage Canadians to save for retirement by enabling them to reduce taxes paid during high earning (and high taxpaying) years.</b> Tax payment is deferred until retirement years when income and tax rates are normally lower.",
          "<b>RRSPs</b> are available to individuals to defer tax and save for retirement. <b>Annual contributions are tax-deductible up to allowable limits.</b> Income earned in the plan <b>accumulates tax-free as long as it remains in the plan</b>.",
          "<b>Two types of RRSP: Single Vendor and Self-Directed.</b> There are <b>no limits on the number of plans</b> a person can hold, and funds can be <b>transferred tax-free from plan to plan</b> by completing a transfer document with the trustee of the new plan.",
          "<b>Single Vendor plans:</b> the holder invests in one or more of <b>GICs, segregated pooled funds or mutual funds</b>, held in trust under the plan by a particular issuer, bank, insurance company, credit union or trust company. To qualify as acceptable investments, <b>pooled funds must be registered with the CRA</b>. <b>No day-to-day investment decisions are required by the holder.</b> There may be a <b>trustee fee</b>.",
          "<b>Self-Directed plans:</b> holders invest funds or contribute certain acceptable assets such as securities directly. Usually <b>administered for a fee</b> by a Canadian financial services company. Advantages: <b>investors make all investment decisions</b>, and a <b>full range of securities</b> may be held — GICs, money market instruments, bonds, equities and mutual funds. Investors may also hold <b>direct foreign investments</b>.",
          "Two special features: an RRSP is a <b>trust account designed to benefit the owner at retirement</b> — withdrawals are subject to a <b>graduated withholding tax</b> and must be <b>included in income in the year withdrawn</b> (more tax may be payable at year-end). And an <b>RRSP cannot be used as collateral for loan purposes</b>."
        ]},
        { table: {
          caption: "The RRSP contribution limit — the calculation they will test",
          head: ["Step", "Detail"],
          rows: [
            ["<b>Start with the LESSER of</b>", "<b>18% of the PREVIOUS year's earned income</b>; and<br><b>the RRSP dollar limit for the year — $31,560 for 2024</b> (indexed to inflation each year)"],
            ["<b>Then DEDUCT</b>", "The <b>previous year's Pension Adjustment (PA)</b> and the <b>current year's Past Service Pension Adjustment (PSPA)</b>. These arise from being part of an employer-sponsored RPP, are reported by the plan administrator, and <b>reduce the RRSP contribution so the maximum across all pension and tax deferral plans combined is not exceeded</b>"],
            ["<b>Then ADD</b>", "The taxpayer's <b>unused RRSP contribution room</b> at the end of the immediately preceding taxation year"],
            ["<b>Deadline</b>", "Contributions must be made <b>in the taxation year or within 60 days after the end of that year</b> to be deductible in that year"],
            ["<b>Carry forward</b>", "Individuals can <b>carry forward unused contribution limits INDEFINITELY</b>"]
          ]
        }},
        { flag: {
          label: "Earned income for RRSP purposes",
          text: "Total <b>employment income</b> (less union or professional dues) + <b>net rental income and net income from self-employment</b> + <b>royalties</b> from a published work or invention and research grants + <b>some alimony or maintenance payments ordered by a court</b> + <b>disability payments from CPP or QPP</b> + <b>Supplementary Employment Insurance Benefits (SEIB)</b> such as employer top-up payments to an employee temporarily unable to work (parental or adoption leave) — <b>but NOT the Employment Insurance (EI) benefits paid by Human Resources and Social Development Canada</b>."
        }},
        { points: [
          "<b>Over-contributions:</b> up to <b>$2,000 may be made without penalty</b>. A penalty tax of <b>1% per month</b> is imposed on any portion of an over-contribution <b>that exceeds $2,000</b>.",
          "<b>Contribution in kind:</b> contributing securities already owned to an RRSP is considered a <b>deemed disposition</b> at the time the contribution is made. The plan holder must use the <b>fair market value</b> of the securities as the proceeds of disposition. Any resulting <b>capital gain is included in income tax for the year of contribution</b>. <b>Any capital LOSS is deemed to be NIL for tax purposes.</b>",
          "<b>Example — Mr. Wu:</b> bought 100 units at $10 = <b>$1,000</b>; two years later worth $20 = <b>$2,000</b>. Contributing to his self-directed RRSP at a net asset value of $20 means the contribution is <b>$2,000</b>. He had an accrued capital gain of <b>$1,000</b> ($2,000 − $1,000), which <b>he must include in his taxes for the year even though he still owns the units</b>.",
          "<b>Spousal RRSP:</b> an RRSP <b>registered in the name of a spouse or common-law spouse</b>, to which the taxpayer contributes and <b>still claims the tax deduction</b>. If the taxpayer is also a plan holder, he or she may contribute to the spouse's plan <b>only to the extent the contributor does not use the maximum contribution available for his or her own plan</b>.",
          "<b>Example — Sofie and Nigel:</b> Sofie's maximum is <b>$11,500</b>; she contributes <b>$10,000</b> to her own RRSP, so she may contribute <b>$1,500</b> to Nigel's spousal RRSP. <b>Nigel's own RRSP contribution limits are not affected</b> — it is a separate plan. Nigel therefore has two plans: one for his personal contributions and one for contributions made by Sofie on his behalf."
        ]},
        { flag: {
          label: "The spousal RRSP attribution rule — a favourite exam scenario",
          text: "Withdrawal from a spousal plan is <b>taxable income to the SPOUSE, not the contributor</b>, since the plan belongs to the spouse in whose name it is registered. <b>BUT</b> any withdrawals of contributions claimed as a tax deduction by the contributing spouse that were made <b>in the year of withdrawal</b>, or <b>in the two calendar years prior to the year of withdrawal</b>, are <b>taxable to the CONTRIBUTOR</b> instead.<br><br><b>Worked example:</b> a husband contributes <b>$1,000</b> to his wife's RRSP in each of six consecutive years. In the <b>seventh year</b> there are no contributions and the wife de-registers the plan. For that seventh taxation year: the <b>husband</b> includes <b>$2,000</b> (7th year — nil; 6th year — $1,000; 5th year — $1,000) and the <b>wife</b> includes <b>$4,000</b> (contributions from years 1, 2, 3 and 4) <b>plus all earnings accumulated on the total $6,000</b> in the plan."
        }},
        { table: {
          caption: "Termination of an RRSP — the five maturity options at 71",
          head: ["#", "Option"],
          rows: [
            ["1", "<b>Withdraw the proceeds as a lump sum</b> — fully taxable in the year of receipt"],
            ["2", "Use the proceeds to purchase a <b>life annuity</b>"],
            ["3", "Use the proceeds to purchase a <b>fixed term annuity</b> providing benefits to a specified age"],
            ["4", "<b>Transfer the proceeds to a Registered Retirement Income Fund (RRIF)</b>, which provides an annual income"],
            ["5", "A <b>combination</b> of the above"]
          ],
          numCol: 0
        }},
        { points: [
          "<b>Mandatory de-registration is required during the calendar year when the RRSP plan holder reaches age 71.</b> A holder may make withdrawals or de-register at any time before that.",
          "<b>On death:</b> benefits can be transferred to the annuitant's <b>spouse</b>. Otherwise the value of any remaining benefits <b>must be included in the deceased's income in the year of death</b>. Under certain conditions remaining benefits may be taxed in the hands of a <b>financially dependent child or grandchild</b> if named beneficiary, who may transfer the benefits to an eligible annuity, an RRSP or a RRIF. A <b>surviving spouse may transfer the plan proceeds tax-free into his or her own RRSP</b> as long as the spouse is the beneficiary."
        ]},
        { table: {
          caption: "RRSP advantages and disadvantages",
          head: ["Advantages", "Disadvantages"],
          rows: [
            ["<b>Reduction in annual taxable income</b> during high taxation years through annual tax-deductible contributions", "If funds are withdrawn, the plan holder pays <b>INCOME tax (not capital gains tax)</b> on the proceeds withdrawn"],
            ["<b>Shelter of certain lump sum types of income</b> from taxation through tax-free transfer into an RRSP", "The holder <b>cannot take advantage of the dividend tax credit</b> on eligible shares that are part of an RRSP"],
            ["<b>Accumulation of funds</b> for retirement, compounding earnings on a <b>tax-free basis until withdrawal</b>", "If the plan holder <b>dies</b>, all payments out of the RRSP to the estate are <b>subject to tax as income of the deceased</b>, unless received by the spouse or, in certain circumstances, a dependent child or grandchild"],
            ["<b>Deferral of income taxes</b> until later years when the holder is presumably in a <b>lower tax bracket</b>", "The assets of an RRSP <b>cannot be used as collateral for a loan</b>"],
            ["Opportunity to <b>split retirement income</b> using spousal RRSPs — lower taxation of combined income and the opportunity to claim <b>two $2,000 pension tax credits</b>", "—"]
          ]
        }},
        { table: {
          caption: "RRIFs and locked-in plans",
          head: ["Vehicle", "Key features"],
          rows: [
            ["<b>RRIF</b><br>(Registered Retirement Income Fund)", "A tax deferral vehicle for RRSP holders who wish to <b>continue the tax sheltering</b> of their plans. The holder transfers RRSP funds into the RRIF. Each year — <b>beginning with the year FOLLOWING acquisition</b> — the holder must withdraw and pay income tax on a fraction of total assets, the <b>&ldquo;annual minimum amount.&rdquo;</b> Assets are <b>capital plus accumulated earnings</b>. The amount is set by a <b>table designed to provide benefits until death</b>. The term may be based on the <b>spouse's age (if younger)</b> to extend the term and reduce the required withdrawal. <b>There is a minimum that must be withdrawn each year, but NO MAXIMUM.</b><br><b>Before age 71</b>, the annual minimum percentage = <b>1 ÷ (90 − age)</b>. At 71, plans use a percentage prescribed by CRA: the <b>factor at 71 is 5.28%</b>, increasing until <b>age 95, when it is set at 20%</b>. A taxpayer can own <b>more than one RRIF</b>."],
            ["<b>Locked-in RRSP / LIRA</b>", "Vested funds from an RPP are generally <b>not available before retirement</b>. If plans are terminated or an employee leaves, RPP funds may be transferred into a <b>locked-in RRSP</b>. The holder <b>cannot withdraw any money until reaching a particular age</b>, depending on province of residence and plan provisions. Termination options are generally limited to a <b>Life Income Fund (LIF)</b> or a <b>Life Annuity</b>. <b>Saskatchewan residents have access to a Prescribed RRIF instead of a LIF.</b>"],
            ["<b>LIF</b><br>(Life Income Fund)", "Similar to RRIFs in that <b>both have minimum annual withdrawal requirements</b> — but <b>LIFs ALSO have MAXIMUM annual withdrawal limits</b>. That maximum is the distinguishing feature."],
            ["<b>Life annuity</b>", "An <b>insurance product</b> featuring a <b>predetermined periodic payout amount until the death of the retiree</b>. Most frequently used to help retirees <b>budget their money</b>. Typically an individual pays into the annuity while still working or buys it in one large purchase; when the person retires the annuity makes periodic (usually monthly) payouts. When a <b>triggering event such as death</b> occurs, the periodic payments usually cease."]
          ]
        }}
      ]
    },
    {
      tag: "Objective 5",
      title: "Tax-Free Savings Accounts",
      blocks: [
        { points: [
          "The <b>TFSA</b> came into existence at the <b>start of 2009</b> and has been welcomed as the <b>most exciting financial planning and wealth management tool for individual Canadians since RRSPs were introduced in 1957</b>.",
          "That is primarily because <b>income earned within a TFSA will not be taxed in any way throughout an individual's lifetime</b>. In addition, there are <b>no restrictions on the timing or amount of withdrawals</b>, and the <b>money withdrawn can be used for any purpose</b>.",
          "<b>Basic rules:</b> any <b>resident of Canada who is at least 18 years of age</b> can open a TFSA. <b>You do not have to have earned any income</b> in the preceding or current year to contribute. The money can come from a <b>tax refund, a bequest, savings, a gift, or earnings</b> from employment or business.",
          "<b>Taxes:</b> money contributed to a TFSA is <b>NOT tax-deductible</b>, but there is <b>no tax payable on the income earned</b> — whether interest, dividends or capital gains.",
          "<b>Qualified investments:</b> GICs, savings accounts, stocks, bonds or mutual funds — <b>basically the same as the ones you can put in an RRSP</b>.",
          "<b>Contributions:</b> contribution room each year consists of the <b>TFSA dollar limit for that year</b> + <b>any withdrawals made in the preceding year</b> + <b>any unused contribution room</b>. The <b>CRA determines the room</b> for each eligible individual based on information provided by the issuer; it is available online or by phone. Contributing more than your room allows is <b>taxed at 1% of the excess contribution every month</b>.",
          "<b>Withdrawals:</b> can be made at <b>any time</b>, with <b>no limit</b> on how much and <b>no penalty or tax</b>. You may later replace/re-contribute the money, but <b>you don't have to</b>. If you have unused room you could re-contribute <b>in the same calendar year</b> (up to the amount of unused room available). <b>If you do not have unused room, you must wait until the next calendar year</b> to replace the amount withdrawn. <b>There is no deadline for re-contributing.</b>"
        ]},
        { table: {
          caption: "Table 6.4 — TFSA annual contribution limits, 2009–2024",
          head: ["Years", "Annual limit"],
          rows: [
            ["2009 to 2012", "$5,000"],
            ["2013 and 2014", "$5,500"],
            ["<b>2015</b>", "<b>$10,000</b>"],
            ["2016 through 2018", "$5,500"],
            ["2019 through 2022", "$6,000"],
            ["2023", "$6,500"],
            ["<b>2024</b>", "<b>$7,000</b>"],
            ["<b>Cumulative total</b>", "<b>$95,500</b> <em>(as printed — see note below)</em>"]
          ]
        }},
        { flag: {
          label: "Second textbook discrepancy — know both numbers",
          text: "<b>The year-by-year limits in Table 6.4 add up to $95,000, but the table's own Total row says $95,500.</b> Add them yourself: 4×$5,000 + 2×$5,500 + $10,000 + 3×$5,500 + 4×$6,000 + $6,500 + $7,000 = <b>$95,000</b>. The arithmetic total is the one that matches CRA's published cumulative room.<br><br><b>What to do on the exam:</b> if a question asks for the cumulative total as a stated figure, answer <b>$95,500</b> — CSI writes its questions from its own table. If a question asks you to <em>add up</em> years, trust the arithmetic. Knowing both protects you either way."
        }},
        { flag: {
          label: "Why the TFSA is so flexible",
          text: "Because the rules let you <b>withdraw money and then replace it</b> (in a future calendar year if you have no unused room) <b>without being taxed</b>, a TFSA is a good way to save for a variety of expenditures at different life stages: <b>tuition fees, repayment of student loans, a wedding, a holiday, a new car, a house, or even increasing the value of the estate you leave to your heirs</b>. You could also <b>put aside the maximum yearly contribution as an emergency fund</b>."
        }}
      ]
    },
    {
      tag: "Objective 6",
      title: "RESPs, CESGs and PRPPs",
      blocks: [
        { points: [
          "<b>RESPs</b> are <b>tax-deferred savings plans intended to help pay for the post-secondary education of a beneficiary</b>.",
          "<b>Contributions are NOT tax-deductible</b>, but there is a <b>tax-deferral opportunity since the income accumulates tax-deferred within the plan</b>.",
          "<b>On withdrawal, the portion of the payments that were not original capital is taxable in the hands of the BENEFICIARY</b> (not the contributor), provided they are enrolled in <b>qualifying or specified educational programs</b>. The assumption is that the beneficiary will be in a <b>lower tax bracket</b> than the contributor, so withdrawals are taxed at a lower rate.",
          "<b>There is NO maximum that can be contributed in a single calendar year</b> for each beneficiary. However, there is a <b>lifetime maximum contribution of $50,000 per beneficiary</b>.",
          "<b>Contributions can be made for up to 31 years, but the plan must be collapsed within 35 years of its starting date.</b> This time limitation requires contributors to decide when the best time to start the plan would be.",
          "<b>Two types of RESP:</b> <b>pooled (group) plans</b> — a number of subscribers make contributions for their beneficiaries; the pooled funds are managed, <b>usually conservatively</b>, by plan administrators; annual contributions are generally <b>pre-set</b>, and <b>the administrator determines the amount paid out</b>. And <b>self-directed plans</b> — administered by banks, mutual fund companies and investment brokers; contributions are <b>more flexible</b> and contributors <b>participate in both the investment and distribution decisions</b>.",
          "<b>Family plans:</b> more than one beneficiary can be named in a plan. These are often used by families with more than one child. <b>If one of the named beneficiaries does not pursue post-secondary education, all of the income can be directed to the beneficiaries who do attend.</b>"
        ]},
        { flag: {
          label: "When the contributor — not the beneficiary — takes the income out",
          text: "The contributor can withdraw the income from an RESP provided the plan has been <b>in existence more than 10 years</b> and <b>none of the named beneficiaries has started qualified post-secondary programs by age 21</b>, <b>or</b> all of the named beneficiaries have <b>died</b>.<br><br>If beneficiaries do not attend qualifying programs, contributors may <b>transfer a maximum of $50,000 of RESP income to their RRSPs</b> — dependent on there being <b>sufficient contribution room remaining</b> in the RRSP. <b>No taxes are charged on the contributions</b> when withdrawn, but <b>revenues earned on the contributions are taxed at the contributor's regular income tax level, plus an additional penalty tax of 20%</b>.<br><br>If the contributor starts to withdraw income, <b>the plan must be terminated by the end of February of the following year</b>."
        }},
        { table: {
          caption: "Table 6.5 — the Canada Education Savings Grant program",
          head: ["Who", "On the first…", "Rate", "Grant", "Total CESG"],
          rows: [
            ["<b>Basic CESG — all families</b>", "$2,500", "20%", "$500", "<b>$500</b>"],
            ["<b>Additional</b> — families earning up to $55,567", "$500", "20%", "$100", "<b>$600</b>"],
            ["<b>Additional</b> — families earning more than $55,567 and less than $111,733", "$500", "10%", "$50", "<b>$550</b>"]
          ]
        }},
        { points: [
          "<b>CESGs</b> provide further incentive to invest in RESPs. The federal government makes a <b>matching grant of 20% of the first $2,500 contributed each year</b> to the RESP of a <b>child under 18</b>. Depending on family income, an <b>additional CESG</b> is available over and above the basic amount.",
          "The grant is <b>worth between $500 and $600 per year</b>. It is <b>forwarded directly to the RESP firm</b> and <b>does NOT count towards the contributor's lifetime contribution limit</b>.",
          "<b>The maximum lifetime grant a beneficiary can receive is $7,200.</b>",
          "<b>CESGs must be repaid if the child does not go on to a qualifying post-secondary institution.</b>",
          "<b>Worked example:</b> a family earning under <b>$55,567</b> that contributes <b>$2,500</b> per beneficiary in a year receives a CESG of <b>$600</b> — 20% on the $2,500 from the basic CESG, plus an additional 20% on the first $500 invested ($2,500 × 20% + $500 × 20%)."
        ]},
        { table: {
          caption: "Pooled Registered Pension Plans (PRPPs)",
          head: ["Aspect", "Detail"],
          rows: [
            ["<b>Purpose</b>", "A <b>new type of retirement savings plan proposed by the federal government</b> to <b>address the gap in employer pension plan coverage</b>, providing an <b>accessible, large-scale, low-cost</b> pension plan"],
            ["<b>How it works</b>", "Holds assets <b>pooled together from multiple participating employers</b>, letting workers take advantage of the <b>lower investment management costs</b> of a large pooled plan. This design <b>reduces the risk and cost employers would normally bear</b> when offering a retirement plan"],
            ["<b>Administered by</b>", "<b>Eligible financial institutions such as banks and insurance companies</b>"],
            ["<b>Who participates</b>", "Those employed or self-employed in the <b>Northwest Territories, Nunavut or Yukon</b>; those who work in a <b>federally regulated</b> business or industry for an employer who chooses to participate; or those who live in a <b>province that has the required provincial standards legislation</b> in place"],
            ["<b>Investment choice</b>", "May permit members to <b>make their own investment decisions</b>, or to <b>select from investment options provided by the plan administrator</b> with varying levels of risk and reward"],
            ["<b>Contributions</b>", "<b>Much like an RRSP</b> — limited to available <b>contribution room based on earned income</b>, and <b>contributions are tax deductible</b>"]
          ]
        }}
      ]
    }
  ],

  numbers: [
    ["38%", "Gross-up applied to <b>eligible Canadian dividends</b>"],
    ["15.02%", "Federal <b>dividend tax credit</b>, applied to the <b>grossed-up (taxable)</b> amount"],
    ["50%", "Portion of a <b>capital gain</b> that is taxable"],
    ["15 / 20.5 / 26 / 29 / 33", "The five <b>2024 federal tax rates</b>"],
    ["$414 / $62.18 / $45.46", "The $300 dividend example: taxable amount, DTC, net tax at 26%"],
    ["$290 / $192.92 / $145", "Table 6.2 — federal tax on $1,000 of interest / dividends / capital gains at <b>29%</b>"],
    ["$150 / $0.00 / $75", "Table 6.3 — the same at <b>15%</b>; dividend tax falls to <b>nil</b>"],
    ["53 weeks", "Maximum length of a <b>corporate</b> taxation year"],
    ["2", "Provinces not having federal collection: <b>Quebec</b> (individuals and corporations) and <b>Alberta</b> (corporations)"],
    ["60 / 65 / 70", "CPP: <b>earliest</b> / <b>standard</b> / <b>latest</b> start age"],
    ["$500 → $320", "Bill's monthly CPP at 65 versus taking it at <b>60</b>"],
    ["40 years / 10 years", "OAS full pension: residence after age 18, and uninterrupted years immediately preceding application"],
    ["3 years", "Years of residence needed per year of absence in the alternative OAS test"],
    ["July 2022 / 10%", "When OAS entitlement began increasing at age <b>75</b>, and by how much"],
    ["6 months / 12 months", "Apply for OAS this far ahead; late applications backdate up to this"],
    ["$90,997", "<b>2024 OAS clawback</b> threshold — repay <b>15%</b> of every dollar above"],
    ["$148,065", "Net income at which a <b>65–74</b> recipient repays <b>all</b> OAS (almost <b>4% higher</b> for 75+)"],
    ["$32,490", "<b>2024 defined contribution limit</b> — the cap is the lesser of this and <b>18% of CURRENT year</b> compensation"],
    ["$31,560", "<b>2024 RRSP dollar limit</b> — the cap is the lesser of this and <b>18% of PREVIOUS year's</b> earned income"],
    ["60 days", "Window after year-end to make a deductible RRSP contribution"],
    ["$2,000 / 1%", "RRSP over-contribution allowed without penalty, and the <b>monthly</b> penalty tax above it"],
    ["2 years", "Spousal RRSP attribution look-back — plus the year of withdrawal"],
    ["$2,000 / $4,000", "Husband's and wife's taxable amounts in the spousal de-registration example"],
    ["71", "Age of <b>mandatory RRSP de-registration</b>"],
    ["1 ÷ (90 − age)", "RRIF annual minimum withdrawal percentage <b>before</b> age 71"],
    ["5.28% → 20%", "RRIF withdrawal factor at <b>71</b>, rising to the cap at age <b>95</b>"],
    ["25 years", "Example of a minimum service level for a full defined benefit"],
    ["$450 / $750", "Flat benefit examples: $15 × 30 years, and Jennifer's $25 × 30 years"],
    ["$600 / $2,400", "Career average: 2% × $1,000 × 30 months, and Andrew's $48,000 × 2% × 30 per month"],
    ["$2,025", "Final average: Chris, $54,000 × 1.5% × 30 = $24,300/year"],
    ["2009 / 1957", "TFSA introduced; the year RRSPs were introduced"],
    ["18", "Minimum age to open a <b>TFSA</b>"],
    ["$7,000 / $95,500", "<b>2024</b> TFSA limit and the <b>cumulative</b> total since 2009"],
    ["$10,000", "The outlier year — <b>2015</b> TFSA limit"],
    ["1% / month", "TFSA over-contribution penalty on the excess"],
    ["$50,000", "RESP <b>lifetime</b> contribution maximum per beneficiary (also the max transferable to an RRSP)"],
    ["31 / 35 years", "RESP contribution period, and the deadline to collapse the plan"],
    ["10 years / age 21", "Conditions for a <b>contributor</b> to withdraw RESP income"],
    ["20%", "Penalty tax on RESP revenues withdrawn by the contributor, on top of regular income tax"],
    ["End of February", "Deadline to terminate an RESP after the contributor starts withdrawing income"],
    ["20% of $2,500 = $500", "<b>Basic CESG</b> for all families"],
    ["$600 / $550", "Maximum annual CESG for families under <b>$55,567</b> / between that and <b>$111,733</b>"],
    ["$7,200", "<b>Maximum lifetime CESG</b> per beneficiary"]
  ],

  traps: [
    ["Interest income", "Taxed <b>in full</b> at the marginal rate. <b>No preferential treatment.</b> Reported on an <b>accrual</b> basis whether or not cash is received.", "Capital gains", "<b>Only 50% is taxable.</b> Reported when realized on disposition."],
    ["Canadian eligible dividends", "<b>Grossed up 38%</b>, then a federal <b>DTC of 15.02%</b> of the grossed-up amount. Preferential.", "FOREIGN dividends", "Taxed <b>like interest income</b> — regular income, <b>no dividend tax credit</b>. Foreign withholding applies; a <b>foreign tax credit</b> may offset."],
    ["RRSP limit", "Lesser of <b>18% of the PREVIOUS year's earned income</b> and the RRSP dollar limit (<b>$31,560</b> in 2024).", "DCP limit", "Lesser of <b>18% of the CURRENT year's compensation</b> and the DC limit (<b>$32,490</b> in 2024)."],
    ["Defined benefit plan", "The <b>BENEFITS are predetermined</b> by formula; contributions are designed to match them.", "Defined contribution plan", "The <b>CONTRIBUTIONS are predetermined</b>; benefits depend on <b>how the contributions were invested</b>. Aka <b>money purchase plan</b>."],
    ["Career average plan", "Pension = % × <b>average earnings over the whole career</b> in the plan × years.", "Final average plan", "Pension = % × average earnings over a <b>STATED PERIOD near retirement</b> × years. Usually pays a <b>higher</b> pension."],
    ["Flat benefit plan", "<b>Dollar amount per year of service.</b> Doesn't differentiate among earnings levels. Common in <b>unionized</b> workplaces.", "Its inflation problem", "The amount <b>must be continually renegotiated</b> to keep pace with inflation."],
    ["RRIF", "<b>Minimum</b> annual withdrawal. <b>NO maximum.</b> Before 71 the factor is <b>1 ÷ (90 − age)</b>.", "LIF", "<b>Minimum AND MAXIMUM</b> annual withdrawal limits. The maximum is what distinguishes it."],
    ["TFSA contributions", "<b>NOT tax-deductible.</b> But <b>no tax on income</b> — interest, dividends or capital gains — ever.", "RRSP contributions", "<b>Tax-deductible.</b> But withdrawals are taxed as <b>INCOME</b>, not capital gains, and the <b>DTC is lost</b>."],
    ["TFSA re-contribution", "Withdraw any time. Re-contribute <b>same year only if you have unused room</b>; otherwise <b>wait until next calendar year</b>.", "TFSA over-contribution", "Taxed <b>1% of the excess EVERY MONTH</b>."],
    ["RESP taxation on withdrawal", "Non-capital portion is taxable <b>in the BENEFICIARY's hands</b> — assumed to be a lower bracket.", "RESP income taken by the CONTRIBUTOR", "Regular income tax <b>plus a 20% penalty tax</b>. Plan must be terminated by <b>end of February</b> of the following year."],
    ["RESP lifetime limit", "<b>$50,000 per beneficiary.</b> No annual maximum.", "CESG lifetime limit", "<b>$7,200 per beneficiary.</b> Paid to the RESP firm; does <b>NOT</b> count toward the $50,000."],
    ["Deductible carrying charges", "Interest to earn <b>interest or dividend</b> income; certain <b>investment advice</b>; <b>management, administration, safe custody</b> fees; <b>accounting</b> fees for recording investment income.", "NOT deductible", "Interest to buy <b>capital-gains-only</b> investments; <b>brokerage commissions</b> (they adjust cost base); interest to <b>contribute to registered plans</b>; <b>RRSP/RRIF admin fees</b>; <b>financial planning</b> fees; <b>safety deposit box</b> charges."],
    ["Contribution in kind — gain", "A <b>deemed disposition</b> at fair market value. The <b>capital gain IS included</b> in income that year.", "Contribution in kind — loss", "Any resulting <b>capital LOSS is deemed to be NIL</b> for tax purposes."],
    ["Spousal RRSP — normal rule", "Withdrawals are taxable to the <b>SPOUSE</b> in whose name the plan is registered.", "Spousal RRSP — attribution", "Contributions deducted in the <b>year of withdrawal or the two prior calendar years</b> are taxed back to the <b>CONTRIBUTOR</b>."],
    ["Employment income", "Taxed on a <b>GROSS RECEIPT</b> basis — very few deductions allowed.", "Business income", "Taxed on a <b>NET-INCOME</b> basis. Self-employment income belongs here."],
    ["Quebec", "Administers its own income tax on <b>BOTH individuals and corporations</b>.", "Alberta", "Administers its own income tax on <b>CORPORATIONS only</b>."]
  ],

  cards: [
    ["For which two provinces does the federal government NOT collect provincial income tax?", "<b>Quebec</b>, which administers its own income tax on <b>both individuals and corporations</b>; and <b>Alberta</b>, which administers its own income tax on <b>corporations</b>."],
    ["What are the four steps of calculating income tax?", "<ol><li>Calculating <b>all sources of income</b> from employment, business and investments</li><li>Making <b>allowable deductions</b> to arrive at <b>taxable income</b></li><li>Calculating the <b>gross or basic tax payable</b></li><li>Claiming <b>tax credits</b> and calculating the <b>net tax payable</b></li></ol>"],
    ["Name the four general types of income and the basis on which employment and business income are taxed.", "<b>Employment income</b> (taxed on a <b>gross receipt</b> basis), <b>capital property income</b>, <b>business income</b> (taxed on a <b>net-income</b> basis, including self-employment), and <b>capital gains and losses</b>."],
    ["What few deductions are employees permitted?", "<b>Pension contributions, union dues, childcare expenses</b> and other minor items. Employees cannot deduct all related costs of earning income the way a business does."],
    ["Define the marginal tax rate.", "Adding the provincial rate to the federal rate gives the <b>combined marginal tax rate</b> — <b>the tax rate that would have to be paid on any additional dollars of taxable income earned</b>."],
    ["State the 2024 federal tax rates.", "<b>15%</b>, <b>20.5%</b>, <b>26%</b>, <b>29%</b> and <b>33%</b>, applied to successive portions of taxable income."],
    ["How is interest income taxed?", "Reported on an <b>annual accrual basis, regardless of whether the cash is actually received</b>. It is taxed as <b>regular income</b> and is <b>not subject to any preferential tax treatment</b>."],
    ["How are eligible Canadian dividends taxed?", "They are <b>grossed up by 38%</b> to arrive at the <b>taxable amount of the dividend</b>, and the taxpayer then receives a federal <b>dividend tax credit of 15.02%</b> of that taxable amount. This reflects that corporations pay dividends from <b>after-tax income</b>. Provincial DTCs also exist."],
    ["Run the $300 dividend example in full.", "Gross-up: $300 × 138% = <b>$414</b> reported in net income (the extra <b>$114</b> is the gross-up). DTC = 15.02% × $414 = <b>$62.18</b>. If taxed at 26%: tax payable = $414 × 26% = <b>$107.64</b>; <b>net tax payable = $107.64 − $62.18 = $45.46</b>."],
    ["How are capital gains taxed? Run the $300 example.", "<b>Only 50% of the capital gain is taxable.</b> A $300 gain means reporting <b>$150</b> in net income. At a 26% rate the tax is <b>$39</b> ($300 × 50% × 26%, or $150 × 26%)."],
    ["How are foreign dividends taxed?", "<b>Generally the same way as interest income</b> — as regular income with <b>no dividend tax credit</b>. Investors usually receive a <b>net</b> amount because <b>non-resident withholding taxes</b> are applied at source, and may use <b>foreign tax credits</b> — essentially the <b>lesser of the foreign tax paid or the Canadian tax payable on the foreign income</b>."],
    ["What form is sent for mutual funds held outside a registered plan?", "A <b>T3 form or a T5 form</b>, reporting the types of income distributed that year — foreign income, Canadian interest, dividends and capital gains, <b>including dividends that have been reinvested</b>. Each is taxed at the fund holder's <b>personal rate in the year received</b>."],
    ["At a 29% marginal rate, compare federal tax on $1,000 of interest, dividends and capital gains.", "<b>Interest $290.00 · Dividends $192.92 · Capital gains $145.00.</b> At this rate, tax on capital gains is <b>lower</b> than on the same amount of Canadian dividends."],
    ["At a 15% marginal rate, compare federal tax on $1,000 of interest, dividends and capital gains.", "<b>Interest $150.00 · Dividends $0.00 · Capital gains $75.00.</b> At this rate taxes owed on dividends are <b>nil</b> because the DTC of $207.28 exceeds the $207.00 of tax."],
    ["List the deductible carrying charges.", "<ul><li><b>Interest paid on funds borrowed to earn investment income</b> such as interest and dividends</li><li>Fees for <b>certain investment advice</b></li><li>Fees paid for <b>management, administration, or safe custody</b> of investments</li><li><b>Accounting fees</b> paid for the recording of investment income</li></ul>"],
    ["List the charges that CANNOT be deducted from investment income.", "<ul><li>Interest on funds borrowed to buy investments generating <b>capital gains only</b></li><li><b>Brokerage fees or commissions</b> — these affect the <b>cost base</b> instead</li><li>Interest on funds borrowed to <b>contribute to an RRSP, RESP, RDSP or TFSA</b></li><li><b>Administration, counselling and trustee fees</b> for a regular or self-directed RRSP or RRIF</li><li>Fees paid for advice such as <b>financial planning</b></li><li><b>Safety deposit box charges</b></li></ul>"],
    ["What three conditions allow a taxpayer to deduct interest on borrowed funds?", "<ul><li>The taxpayer has a <b>legal obligation to pay the interest</b></li><li>The <b>purpose of borrowing is to earn income</b></li><li>The <b>income produced from the securities is not tax exempt</b></li></ul>For <b>convertible debentures</b>, normally all carrying charges are deductible since they may convert into common shares that could theoretically pay unlimited dividends."],
    ["Who must contribute to CPP or QPP, and is the pension right revocable?", "<b>Every resident in Canada earning income from employment or self-employment</b>. All provinces except Quebec contribute to the <b>CPP</b>; Quebec residents contribute to the <b>QPP</b>. Contributions are <b>automatic</b> and the right to a pension based on years of contribution is <b>irrevocable — it is paid out even if the contributor leaves Canada</b>."],
    ["At what ages can CPP begin, and what happens at each?", "Standard is a monthly pension for life beginning at <b>age 65</b>. You may start at <b>60</b>, with the amount <b>reduced</b> by a percentage for each month under 65. You may <b>postpone until 70</b>, with the amount <b>increased</b> for each month over 65. Example: Bill's $500/month at 65 becomes <b>$320/month</b> taken at 60."],
    ["How does one qualify for a FULL OAS pension?", "<b>Resident in Canada for at least 40 years after reaching age 18</b>, <b>AND</b> resident for an <b>uninterrupted 10 years immediately preceding</b> the application."],
    ["What is the alternative OAS test for someone who wasn't here the last 10 years?", "They may still qualify if they <b>lived in Canada for the full year immediately before the application was approved</b>, <b>AND</b> lived or were present in Canada for <b>at least three years for each year of absence</b> during that 10-year period."],
    ["What happens to OAS at age 75?", "Starting in <b>July 2022</b>, when an OAS pensioner reaches <b>age 75</b> their <b>OAS entitlement increases by 10%</b>."],
    ["Describe the OAS application timing rules.", "Benefits are <b>not paid until application has been made and approved</b>. Apply <b>six months prior to eligibility</b>. <b>Proof of age and legal residence status</b> are required. Payments normally begin the <b>month following</b> the month the applicant meets the age and residence requirements. Late applications may be paid <b>retroactively for up to 12 months</b>."],
    ["Explain the OAS clawback with 2024 numbers.", "A provision in the <b>Income Tax Act</b> requires higher-income Canadians to repay social benefits; OAS falls into this category. For <b>2024</b> the clawback starts at <b>$90,997</b> of income, and you repay <b>15% of every dollar above</b> it. A recipient aged <b>65–74</b> with net income of about <b>$148,065</b> repays <b>all</b> OAS; for those <b>75 and older</b> that maximum is <b>almost 4% higher</b>."],
    ["Define a registered pension plan and state who may deduct contributions.", "A <b>trust, registered with the CRA or the appropriate provincial agency, established by a company to provide pension benefits for its employees when they retire</b>. <b>Both employer and employee contributions are tax-deductible.</b> The employer's role in contributing distinguishes RPPs from government plans and RRSPs."],
    ["Distinguish a defined benefit plan from a defined contribution plan.", "In a <b>DBP</b>, the <b>benefits are predetermined</b> by a formula including years of service, income level and other variables, and contributions are designed to match. In a <b>DCP</b> (<b>money purchase plan</b>), the <b>contributions are predetermined</b> and the <b>benefits at retirement depend on how the contributions were invested</b>."],
    ["Name the three types of defined benefit plan and what distinguishes them.", "<b>Flat benefit plans</b>, <b>career average plans</b> and <b>final average plans</b>. <b>They differ only in the criteria chosen to calculate benefits.</b>"],
    ["Give the flat benefit formula and Jennifer's example.", "<b>Monthly pension = specified dollar amount per month × years of service.</b> Jennifer has a flat benefit of <b>$25 per month per year of service</b> and works <b>30 years</b>: $25 × 30 = <b>$750 per month</b>."],
    ["Give the career average formula and Andrew's example.", "<b>Pension = percentage × career average salary × years of service.</b> Andrew: <b>$48,000</b> averaged annual salary × <b>2%</b> × <b>30</b> years = <b>$28,800 per year</b>, or <b>$2,400 per month</b>."],
    ["Give the final average formula and Chris's example.", "<b>Pension = percentage × final average earnings × years of service.</b> Chris's best three of the last five years were $52,000, $54,000 and $56,000 → average <b>$54,000</b>. $54,000 × <b>1.5%</b> × <b>30</b> years = <b>$24,300 per year</b>, or <b>$2,025 per month</b>."],
    ["What period does a final average plan use, and why is that preferred?", "A <b>stated period</b> — often the average of the <b>best five consecutive years in the last 10 years</b> of employment, or the <b>best three consecutive years in the last five</b>. Using the <b>best</b> average years is preferred <b>in case earnings experience a drop close to retirement</b>."],
    ["Name the advantages of a flat benefit plan.", "<ul><li>Normally funded <b>entirely by the employer</b></li><li>Benefit levels usually increase through <b>ongoing employee-employer negotiations</b></li><li>The <b>formula is easy to understand</b></li><li>It is paid <b>in addition to OAS and CPP/QPP</b> benefits</li></ul>"],
    ["Name the disadvantages of a defined contribution plan.", "<ul><li>The <b>final pension amount is unknown until retirement</b></li><li>It may be <b>smaller than expected if investment performance has been poor</b></li><li>Members retiring under <b>similar circumstances may receive substantially different pensions</b> depending on investment return</li></ul>"],
    ["State the defined contribution plan contribution cap.", "Combined employer/employee contributions cannot exceed the <b>LESSER</b> of <b>18% of the employee's CURRENT year compensation</b> and the <b>defined contribution limit for the year — $32,490 in 2024</b>, indexed annually to inflation."],
    ["What happens if you leave a defined benefit plan before the minimum service level?", "You may receive a <b>lump sum usually transferred into a locked-in retirement account (LIRA)</b>. Amounts transferred into a LIRA are <b>locked in and cannot be withdrawn — they can only be used for retirement income</b>. Full benefits may require, for example, <b>25 years</b> of service."],
    ["What is the principle behind tax deferral plans?", "To <b>encourage Canadians to save for retirement by enabling them to reduce taxes paid during high earning (and high taxpaying) years</b>. Tax payment is <b>deferred until retirement years when income and tax rates are normally lower</b>."],
    ["Distinguish a Single Vendor RRSP from a Self-Directed RRSP.", "<b>Single Vendor:</b> holder invests in one or more of <b>GICs, segregated pooled funds or mutual funds</b> held in trust by a particular issuer; <b>no day-to-day investment decisions</b> required; there may be a <b>trustee fee</b>. <b>Self-Directed:</b> holders invest or contribute acceptable assets such as securities directly, administered for a fee; the investor <b>makes all investment decisions</b> and may hold a <b>full range of securities</b> plus <b>direct foreign investments</b>."],
    ["Name two special features of an RRSP account.", "<b>1.</b> Withdrawals are subject to a <b>graduated withholding tax</b> and must be <b>included in income in the year withdrawn</b>; more tax may be payable at year-end. <b>2.</b> An <b>RRSP cannot be used as collateral for loan purposes</b>."],
    ["State the full RRSP contribution limit calculation.", "Take the <b>LESSER</b> of <b>18% of the previous year's earned income</b> and the <b>RRSP dollar limit for the year ($31,560 for 2024)</b>. From that: <b>DEDUCT</b> the previous year's <b>Pension Adjustment (PA)</b> and the current year's <b>Past Service Pension Adjustment (PSPA)</b>; then <b>ADD</b> unused <b>contribution room</b> at the end of the immediately preceding taxation year."],
    ["What are the PA and PSPA, and why do they reduce your room?", "They result from being part of an <b>employer-sponsored RPP</b> and are <b>reported by the plan member's administrator</b>. They reduce the amount you can contribute to an RRSP <b>to ensure the maximum annual contribution across all pension and tax deferral plans combined is not exceeded</b>."],
    ["What counts as earned income for RRSP purposes?", "<ul><li>Total <b>employment income</b> less union or professional dues</li><li><b>Net rental income</b> and <b>net income from self-employment</b></li><li><b>Royalties</b> from a published work or invention, and research grants</li><li>Some <b>alimony or maintenance payments ordered by a court</b></li><li><b>Disability payments from CPP or QPP</b></li><li><b>Supplementary Employment Insurance Benefits (SEIB)</b> — employer top-ups for parental or adoption leave — <b>but NOT EI benefits</b> paid by Human Resources and Social Development Canada</li></ul>"],
    ["What are the RRSP over-contribution rules?", "Over-contributions of up to <b>$2,000</b> may be made <b>without penalty</b>. A penalty tax of <b>1% per month</b> is imposed on any portion of the over-contribution that <b>exceeds $2,000</b>."],
    ["Explain a contribution in kind and run Mr. Wu's example.", "Contributing securities already owned is a <b>deemed disposition</b> at the time of contribution, using <b>fair market value</b> as proceeds. Any <b>capital gain is included in income</b> that year; any <b>capital loss is deemed NIL</b>. <b>Mr. Wu:</b> 100 units bought at $10 = $1,000; now worth $20 = <b>$2,000</b>. His contribution is <b>$2,000</b> and he must report a <b>$1,000 capital gain</b> — even though he still owns the units."],
    ["What is a spousal RRSP and how does it affect contribution room?", "An RRSP <b>registered in the name of a spouse or common-law spouse</b> to which the taxpayer contributes while <b>still claiming the tax deduction</b>. If the contributor is also a plan holder, they may contribute to the spouse's plan <b>only to the extent they do not use their own maximum</b>. <b>The spouse's own contribution limits are not affected.</b>"],
    ["State the spousal RRSP attribution rule.", "Withdrawals from a spousal plan are taxable to the <b>SPOUSE</b> — <b>unless</b> the contributions claimed as a deduction by the contributing spouse were made <b>in the year of withdrawal</b> or <b>in the two calendar years prior</b> to the year of withdrawal, in which case they are <b>taxable to the CONTRIBUTOR</b>."],
    ["Run the six-year spousal attribution example.", "A husband contributes <b>$1,000</b> to his wife's RRSP in each of six consecutive years; in year 7 there are no contributions and the wife de-registers. For year 7 the <b>husband</b> includes <b>$2,000</b> (year 7 nil + year 6 $1,000 + year 5 $1,000). The <b>wife</b> includes <b>$4,000</b> (years 1–4) <b>plus all earnings accumulated on the total $6,000</b>."],
    ["At what age must an RRSP be de-registered, and what are the five maturity options?", "During the calendar year the holder reaches <b>age 71</b>. Options: <b>withdraw a lump sum</b> (fully taxable in the year of receipt); purchase a <b>life annuity</b>; purchase a <b>fixed term annuity</b> to a specified age; <b>transfer to a RRIF</b>; or a <b>combination</b>."],
    ["What happens to an RRSP on the holder's death?", "Benefits can be transferred to the annuitant's <b>spouse</b>. Otherwise the value of remaining benefits <b>must be included in the deceased's income in the year of death</b>. Under certain conditions they may be taxed in the hands of a <b>financially dependent child or grandchild</b> named as beneficiary, who may transfer them to an eligible annuity, an RRSP or a RRIF. A <b>surviving spouse who is the beneficiary may transfer the proceeds tax-free into their own RRSP</b>."],
    ["Name the disadvantages of RRSPs.", "<ul><li>On withdrawal the holder pays <b>INCOME tax, not capital gains tax</b>, on the proceeds</li><li>The holder <b>cannot take advantage of the dividend tax credit</b> on eligible shares in the plan</li><li>If the holder dies, payments to the estate are <b>taxed as income of the deceased</b> unless received by a spouse or, in certain circumstances, a dependent child or grandchild</li><li>The assets <b>cannot be used as collateral for a loan</b></li></ul>"],
    ["What is a RRIF and when do withdrawals begin?", "A tax deferral vehicle for RRSP holders wishing to <b>continue tax sheltering</b>. The holder transfers RRSP funds into it, and <b>beginning with the year FOLLOWING acquisition</b> must withdraw and pay income tax on the <b>&ldquo;annual minimum amount.&rdquo;</b> Assets are <b>capital plus accumulated earnings</b>, and the amount comes from a <b>table designed to provide benefits until death</b>."],
    ["Give the RRIF withdrawal factors.", "<b>Before age 71:</b> the annual minimum percentage = <b>1 ÷ (90 − age)</b>. <b>At 71:</b> plans use a percentage prescribed by CRA — the factor at 71 is <b>5.28%</b>, increasing until <b>age 95, when it is set at 20%</b>. <b>There is a minimum but NO maximum</b>, and a taxpayer may own more than one RRIF."],
    ["How can a RRIF holder reduce the required withdrawal?", "The term of the RRIF may be based on the age of the <b>holder's spouse, if younger</b>, instead of the plan holder's own age — which <b>extends the term and reduces the amount of the required withdrawal</b>."],
    ["What is a locked-in RRSP and what are its termination options?", "RPP funds transferred when plans are terminated or an employee leaves. The holder <b>cannot withdraw any money until reaching a particular age</b>, depending on province of residence and plan provisions. Termination options are generally limited to a <b>Life Income Fund (LIF)</b> or a <b>Life Annuity</b>. <b>Saskatchewan residents have access to a Prescribed RRIF instead of a LIF.</b>"],
    ["What distinguishes a LIF from a RRIF?", "Both have <b>minimum annual withdrawal requirements</b>, but <b>LIFs also have MAXIMUM annual withdrawal limits</b>."],
    ["Define a life annuity.", "An <b>insurance product</b> featuring a <b>predetermined periodic payout amount until the death of the retiree</b>. Most frequently used to help retirees <b>budget their money</b> after retirement. An individual pays in while working or buys it in one large purchase; payouts (usually monthly) begin at retirement and <b>cease when a triggering event such as death occurs</b>."],
    ["When did the TFSA come into existence, and what is its headline feature?", "At the <b>start of 2009</b> — described as the most exciting financial planning tool for individual Canadians since RRSPs were introduced in <b>1957</b>. Its headline feature: <b>income earned within a TFSA will not be taxed in any way throughout an individual's lifetime</b>, with <b>no restrictions on the timing or amount of withdrawals</b> and the money usable <b>for any purpose</b>."],
    ["Who can open a TFSA, and is earned income required?", "<b>Any resident of Canada who is at least 18 years of age.</b> <b>You do not have to have earned any income</b> in the preceding or current year to contribute — the money can come from a tax refund, a bequest, savings, a gift, or earnings."],
    ["How is TFSA contribution room calculated, and what is the over-contribution penalty?", "Room each year = the <b>TFSA dollar limit for that year</b> + <b>any withdrawals made in the preceding year</b> + <b>any unused contribution room</b>. The <b>CRA</b> determines it. Over-contributing is taxed at <b>1% of the excess contribution every month</b>."],
    ["Explain the TFSA withdrawal and re-contribution rules.", "Withdrawals can be made <b>at any time</b>, with <b>no limit and no penalty or tax</b>. You may replace the money but <b>don't have to</b>. If you have <b>unused room</b> you can re-contribute <b>in the same calendar year</b> up to that amount; if you have <b>no unused room</b> you must <b>wait until the next calendar year</b>. <b>There is no deadline for re-contributing.</b>"],
    ["Give the TFSA annual limits and the cumulative total.", "<b>2009–2012:</b> $5,000 · <b>2013–2014:</b> $5,500 · <b>2015:</b> $10,000 · <b>2016–2018:</b> $5,500 · <b>2019–2022:</b> $6,000 · <b>2023:</b> $6,500 · <b>2024:</b> $7,000.<br><br>Table 6.4 states the cumulative total as <b>$95,500</b> — quote that if asked for the stated figure. Note that the years actually <b>sum to $95,000</b>, which is what CRA publishes; the textbook table is internally inconsistent. <b>Know both.</b>"],
    ["Are TFSA contributions deductible? Is the income taxable?", "Contributions are <b>NOT tax-deductible</b>. But there is <b>no tax payable on the income earned</b> in the TFSA — whether it is <b>interest, dividends or capital gains</b>."],
    ["What is an RESP and who is taxed on withdrawals?", "A <b>tax-deferred savings plan intended to help pay for the post-secondary education of a beneficiary</b>. Contributions are <b>not tax-deductible</b>, but income <b>accumulates tax-deferred</b>. On withdrawal the portion that was <b>not original capital is taxable in the hands of the BENEFICIARY</b>, provided they are enrolled in a qualifying or specified educational program — assumed to be a <b>lower tax bracket</b>."],
    ["State the RESP contribution and time limits.", "<b>No maximum</b> in a single calendar year per beneficiary, but a <b>lifetime maximum of $50,000 per beneficiary</b>. Contributions can be made for up to <b>31 years</b>, and the plan must be <b>collapsed within 35 years</b> of its starting date."],
    ["Distinguish pooled from self-directed RESPs.", "<b>Pooled (group) plans:</b> a number of subscribers contribute for their beneficiaries; funds are managed, <b>usually conservatively</b>, by plan administrators; annual contributions are generally <b>pre-set</b> and the <b>administrator determines the amount paid out</b>. <b>Self-directed plans:</b> administered by banks, mutual fund companies and investment brokers; contributions are <b>more flexible</b> and contributors <b>participate in investment and distribution decisions</b>."],
    ["What is an RESP family plan and what is its advantage?", "A plan naming <b>more than one beneficiary</b>, often used by families with more than one child. If one of the named beneficiaries <b>does not pursue post-secondary education, all of the income can be directed to the beneficiaries who do attend</b>."],
    ["Under what conditions can the CONTRIBUTOR withdraw RESP income?", "Provided the plan has been <b>in existence more than 10 years</b> and <b>none of the named beneficiaries has started qualified post-secondary programs by age 21</b>, <b>or</b> all named beneficiaries have <b>died</b>."],
    ["What happens tax-wise if the contributor withdraws RESP income, and what is the deadline?", "<b>No taxes on the contributions</b> when withdrawn, but <b>revenues earned on them are taxed at the contributor's regular income tax level plus an additional penalty tax of 20%</b>. Alternatively up to <b>$50,000 of RESP income may be transferred to the contributor's RRSP</b> if there is sufficient room. If the contributor starts withdrawing income, <b>the plan must be terminated by the end of February of the following year</b>."],
    ["Describe the basic CESG.", "The federal government makes a <b>matching grant of 20% of the first $2,500 contributed each year</b> to the RESP of a <b>child under 18</b> — worth <b>$500</b>. Depending on family income an <b>additional CESG</b> is available on top."],
    ["Give the additional CESG rates and the resulting annual totals.", "Families earning <b>up to $55,567</b>: <b>20%</b> on the first <b>$500</b> = <b>$100</b>, for a total of <b>$600</b>. Families earning <b>more than $55,567 and less than $111,733</b>: <b>10%</b> on the first $500 = <b>$50</b>, for a total of <b>$550</b>. The grant is worth <b>between $500 and $600 per year</b>."],
    ["What is the maximum lifetime CESG, and does it count against the contribution limit?", "<b>$7,200 per beneficiary.</b> The grant is <b>forwarded directly to the RESP firm</b> and <b>does NOT count towards the contributor's lifetime contribution limit</b>. However, <b>CESGs must be repaid if the child does not go on to a qualifying post-secondary institution</b>."],
    ["What is a PRPP and what problem does it solve?", "A <b>Pooled Registered Pension Plan</b> — a retirement savings plan proposed by the federal government to <b>address the gap in employer pension plan coverage</b> by providing an <b>accessible, large-scale, low-cost</b> plan. It <b>pools assets from multiple participating employers</b> so workers benefit from <b>lower investment management costs</b>, and it <b>reduces the risk and cost employers would normally bear</b>."],
    ["Who participates in a PRPP, and how are contributions treated?", "Those <b>employed or self-employed in the Northwest Territories, Nunavut or Yukon</b>; those who work in a <b>federally regulated</b> business or industry for a participating employer; or those who live in a <b>province with the required provincial standards legislation</b> in place. <b>Much like an RRSP</b>, contributions are limited to <b>available contribution room based on earned income</b> and are <b>tax deductible</b>. Administered by <b>banks and insurance companies</b>."],
    ["What legitimate means of tax avoidance does the text list?", "<ul><li>Full utilization of <b>allowable deductions</b></li><li>Conversion of <b>non-deductible expenses into tax-deductible expenditures</b></li><li><b>Postponing the receipt of income</b></li><li><b>Splitting income with other family members</b>, when handled properly</li><li>Selecting investments that provide a <b>better after-tax rate of return</b></li></ul>Tax authorities <b>do not condone tax evasion</b>."],
    ["What caution does the text give about minimizing tax?", "<b>Minimization of tax must not become the sole objective</b> nor overwhelm the other elements of proper financial management. <b>Choosing an investment based solely on low tax status does not make sense if the end result is a lower after-tax rate of return than another investment that is more heavily taxed.</b>"]
  ],

  quiz: [
    ["Eligible Canadian dividends are grossed up by what percentage?", ["15.02%", "25%", "50%", "38%"], 3, "Eligible Canadian dividends are grossed up by 38% to arrive at the taxable amount of the dividend; the taxpayer then receives a federal dividend tax credit of 15.02% of that grossed-up amount."],
    ["An investor receives a $300 capital gain and is taxed at 26%. The tax payable is:", ["$78", "$39", "$150", "$114"], 1, "Only 50% of a capital gain is taxable. $300 × 50% = $150 reported in income; $150 × 26% = $39."],
    ["An individual receives a $300 eligible Canadian dividend. The amount reported in net income is:", ["$300", "$345", "$414", "$450"], 2, "$300 × 138% = $414. The additional $114 is the gross-up, and $414 is the taxable amount of the dividend."],
    ["How is interest income reported for tax purposes?", ["Only when the cash is actually received", "On an annual accrual basis regardless of whether cash is received", "At 50% inclusion like capital gains", "With a 38% gross-up"], 1, "Taxpayers must report interest income on an annual accrual basis regardless of whether the cash is actually received. It is taxed as regular income with no preferential treatment."],
    ["Dividends from foreign corporations are taxed:", ["The same way as Canadian eligible dividends", "Generally the same way as interest income", "At a 50% inclusion rate", "Tax-free if withholding was applied"], 1, "Foreign dividends are generally taxed in much the same way as interest income — as regular income with no dividend tax credit. Foreign tax credits may offset Canadian tax otherwise payable."],
    ["At a 15% marginal federal rate, the federal tax owed on $1,000 of Canadian dividend income is approximately:", ["$207.00", "$150.00", "$75.00", "$0.00"], 3, "Table 6.3: federal tax is $207.00 on the grossed-up $1,380, but the dividend tax credit is $207.28 — so the taxes owed on dividends are nil at that rate."],
    ["Which of the following carrying charges IS deductible?", ["Safety deposit box charges", "Accounting fees for the recording of investment income", "Fees paid for financial planning advice", "Brokerage commissions on a share purchase"], 1, "Accounting fees paid for the recording of investment income are deductible. Financial planning fees, safety deposit box charges and brokerage commissions are not — commissions affect the cost base instead."],
    ["The maximum annual tax-deductible RRSP contribution is the lesser of the RRSP dollar limit and:", ["18% of the current year's earned income", "18% of the previous year's earned income", "20% of the previous year's earned income", "18% of net worth"], 1, "The RRSP limit uses 18% of the PREVIOUS year's earned income. The defined contribution plan limit uses 18% of the CURRENT year's compensation — that is the distinction most often tested."],
    ["For 2024, the RRSP dollar contribution limit is:", ["$32,490", "$30,780", "$31,560", "$29,210"], 2, "The RRSP dollar contribution limit is $31,560 for the 2024 taxation year, indexed to inflation each year. $32,490 is the 2024 defined contribution plan limit."],
    ["RRSP contributions must be made in the taxation year or within how many days after year end?", ["30 days", "45 days", "90 days", "60 days"], 3, "Contributions must be made in the taxation year or within 60 days after the end of that year to be deductible in that year."],
    ["An RRSP over-contribution of how much may be made without penalty?", ["$1,000", "No over-contribution is permitted", "$5,000", "$2,000"], 3, "Over-contributions of up to $2,000 may be made without penalty. A penalty tax of 1% per month applies to any portion exceeding $2,000."],
    ["Which of the following is NOT included in earned income for RRSP purposes?", ["Net rental income", "Royalties from a published work", "Employment Insurance benefits paid by the government", "Disability payments from CPP or QPP"], 2, "Supplementary Employment Insurance Benefits such as employer top-up payments count, but the EI benefits paid by Human Resources and Social Development Canada do not."],
    ["A client contributes shares with a cost of $1,000 and a market value of $2,000 to her RRSP. What is the tax consequence?", ["A deemed disposition triggering a $1,000 capital gain in the year of contribution", "No tax consequence until the shares are sold", "A deemed disposition triggering a $2,000 capital gain", "A capital loss deemed to be nil"], 0, "A contribution in kind is a deemed disposition at fair market value. The $1,000 accrued gain must be included in income for the year of contribution even though the client still owns the units. Note that a capital LOSS on such a contribution is deemed to be nil."],
    ["A husband contributed $1,000 to his wife's spousal RRSP in each of six consecutive years. In year seven he contributes nothing and she de-registers. How much does the HUSBAND include in income?", ["$0", "$6,000", "$4,000", "$2,000"], 3, "Contributions made in the year of withdrawal or the two calendar years prior are attributed back to the contributor: year 7 nil + year 6 $1,000 + year 5 $1,000 = $2,000. The wife includes $4,000 plus all accumulated earnings."],
    ["An RRSP must be de-registered during the calendar year in which the holder reaches age:", ["65", "71", "69", "75"], 1, "Mandatory de-registration is required during the calendar year when the RRSP plan holder reaches age 71."],
    ["Which of the following is a DISADVANTAGE of an RRSP?", ["The holder cannot use the dividend tax credit on eligible shares in the plan", "Funds compound tax-free until withdrawal", "Contributions are tax-deductible", "Income can be split using a spousal plan"], 0, "The RRSP holder cannot take advantage of the dividend tax credit on eligible shares held in the plan. Other disadvantages: withdrawals are taxed as income not capital gains, assets cannot be used as loan collateral, and on death payments to the estate are taxed as income of the deceased."],
    ["Before age 71, the RRIF annual minimum withdrawal percentage is calculated as:", ["Age ÷ 90", "1 ÷ (95 − age)", "1 ÷ (90 − age)", "A flat 5.28%"], 2, "Before the RRIF holder reaches 71, the minimum percentage is 1 ÷ (90 − age). At 71 plans use a CRA-prescribed percentage; the factor at 71 is 5.28%, rising to 20% at age 95."],
    ["What distinguishes a LIF from a RRIF?", ["A LIF has maximum as well as minimum annual withdrawal limits", "A LIF has no minimum withdrawal", "A LIF is not registered", "A LIF can only hold GICs"], 0, "LIFs are similar to RRIFs in that both have minimum annual withdrawal requirements, but LIFs also have maximum annual withdrawal limits."],
    ["In a defined contribution plan:", ["The contributions are predetermined and benefits depend on investment returns", "The benefits are predetermined by formula", "The employer guarantees the final pension", "Only the employer contributes"], 0, "In a DCP — also called a money purchase plan — the contributions are predetermined and the benefits at retirement depend on how the contributions were invested. In a DBP the benefits are predetermined."],
    ["Jennifer's flat benefit plan pays $25 per month per year of service. After 30 years, her monthly pension is:", ["$450", "$600", "$900", "$750"], 3, "$25 × 30 years = $750 per month. A flat benefit plan pays a specified dollar amount of pension for each year of service."],
    ["Andrew retires after 30 years in a career average plan with a 2% defined benefit percentage and an averaged annual salary of $48,000. His annual pension is:", ["$14,400", "$24,000", "$32,400", "$28,800"], 3, "$48,000 × 2% × 30 = $28,800 per year, or $2,400 per month."],
    ["Chris's best three of his last five years were $52,000, $54,000 and $56,000, with a final average formula of 1.5% and 30 years of service. His annual pension is:", ["$21,600", "$24,300", "$25,200", "$27,000"], 1, "The 3-year average is $54,000. $54,000 × 1.5% × 30 = $24,300 per year, or $2,025 per month."],
    ["Which defined benefit plan type usually pays a HIGHER pension?", ["The flat benefit plan", "The final average plan", "The career average plan", "They always pay the same"], 1, "Final average pension plans usually pay a higher pension than a career average plan, because they base the pension on earnings near retirement, which also provides better inflation protection up to retirement."],
    ["An employee who leaves a defined benefit plan before the minimum service level typically receives:", ["A refund of employee contributions only", "An immediate life annuity", "A lump sum usually transferred into a LIRA", "Nothing"], 2, "Depending on the plan, they may receive a lump sum usually transferred into a locked-in retirement account. Amounts in a LIRA are locked in and can only be used for retirement income."],
    ["CPP contributors may begin receiving a reduced pension as early as age:", ["55", "60", "58", "62"], 1, "You can apply to receive your pension starting at age 60, but the amount is reduced by a certain percentage for each month you are under 65. You may also postpone until age 70 for an increased amount."],
    ["To qualify for a full OAS pension under the standard test, a person must have been resident in Canada for at least:", ["40 years after age 18", "30 years after age 18", "20 years after age 18", "10 years in total"], 0, "Full pension requires residence in Canada for at least 40 years after reaching age 18, and residence for an uninterrupted 10 years immediately preceding the application."],
    ["For the 2024 income year, the OAS clawback begins at an income threshold of approximately:", ["$90,997", "$79,845", "$111,733", "$148,065"], 0, "The clawback starts at $90,997 for 2024, and you must pay back 15% of every dollar above this threshold. At roughly $148,065 of net income, a recipient aged 65 to 74 repays all OAS benefits."],
    ["The minimum age to open a TFSA is:", ["16", "19", "18", "21"], 2, "Any resident of Canada who is at least 18 years of age can open a TFSA, and no earned income is required in the preceding or current year to contribute."],
    ["Table 6.4 states the cumulative TFSA contribution limit from 2009 through 2024 as:", ["$95,500", "$88,000", "$102,000", "$81,500"], 0, "The textbook's Total row states $95,500 — answer that if asked for the stated figure. Be aware the year-by-year limits actually sum to $95,000, which is the figure CRA publishes; the table is internally inconsistent. The 2024 annual limit is $7,000 and the outlier year was 2015 at $10,000."],
    ["A client withdraws $5,000 from her TFSA in June and has no unused contribution room. When may she re-contribute it?", ["Immediately", "After 90 days", "In the next calendar year", "Never"], 2, "If you do not have unused TFSA contribution room, you must wait until the next calendar year to replace/re-contribute the amount withdrawn. There is no deadline for doing so."],
    ["The lifetime RESP contribution maximum per beneficiary is:", ["$25,000", "$42,000", "$50,000", "$7,200"], 2, "There is no maximum in a single calendar year, but there is a lifetime maximum contribution of $50,000 per beneficiary. $7,200 is the maximum lifetime CESG."],
    ["RESP contributions can be made for up to ___ years, and the plan must be collapsed within ___ years of its starting date.", ["25; 30", "21; 25", "35; 40", "31; 35"], 3, "Contributions can be made for up to 31 years, but the plan must be collapsed within 35 years of its starting date."],
    ["Under the basic CESG, the federal government matches what percentage of the first $2,500 contributed annually?", ["10%", "15%", "20%", "25%"], 2, "The basic CESG is a matching grant of 20% of the first $2,500 contributed each year to the RESP of a child under 18 — worth $500."],
    ["The maximum lifetime CESG a beneficiary can receive is:", ["$7,200", "$5,000", "$50,000", "$500 per year with no lifetime cap"], 0, "The maximum lifetime grant a beneficiary can receive is $7,200. The grant goes directly to the RESP firm and does not count toward the contributor's lifetime contribution limit — but must be repaid if the child does not attend a qualifying institution."],
    ["If a contributor withdraws income from an RESP because the beneficiaries did not attend a qualifying program, the revenues are taxed at their regular rate plus a penalty tax of:", ["20%", "15%", "10%", "25%"], 0, "Revenues earned on the contributions are taxed at the contributor's regular income tax level plus an additional penalty tax of 20%. Alternatively up to $50,000 may be transferred to their RRSP if room permits."],
    ["Combined employer and employee contributions to a defined contribution pension plan cannot exceed the lesser of the DC limit and:", ["18% of the employee's previous year's earned income", "The RRSP dollar limit", "20% of current year compensation", "18% of the employee's current year compensation"], 3, "The DCP cap is the lesser of 18% of the employee's CURRENT year compensation and the defined contribution limit for the year, which was $32,490 in 2024."],
    ["Which province administers its own income tax on BOTH individuals and corporations?", ["Quebec", "Ontario", "Alberta", "British Columbia"], 0, "The federal government collects provincial income taxes for all provinces except Quebec, which administers its own income tax on both individuals and corporations, and Alberta, which administers its own on corporations."]
  ]
};
