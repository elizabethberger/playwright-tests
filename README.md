# Automation tests for SAP Fioneer website

Playwright was used for UI testing.

## Getting Started

1. Install dependencies:

```shell
npm install
```

## Running tests

Command for running all tests:

```shell
npx playwright test
```

Command for running all tests in headed mode:

```shell
npx playwright test --headed
```

## Running tests by tags

Each test has a tag assigned to it. If you want to run only one of them, use the command:

```shell
npx playwright test --grep "@TEST1"
```

## Reporting

Once the tests are finished, you can view the report using the command:

```shell
npx playwright show-report
```

The current report is also available for download in the Github Actions tab of the Artifacts section.

Video and trace viewer is displayed after the test fails.

## Where are the tests?

The tests can be found in `tests` folder.

## Troubleshooting

Please contact me via MD if you have any issues.
