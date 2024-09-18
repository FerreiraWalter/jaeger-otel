import { diag, DiagConsoleLogger, DiagLogLevel } from '@opentelemetry/api'
import { NodeSDK } from '@opentelemetry/sdk-node'
import { KnexInstrumentation } from '@opentelemetry/instrumentation-knex'
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http'
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-grpc'

diag.setLogger(new DiagConsoleLogger(), DiagConsoleLogger.ERROR)

const sdk = new NodeSDK({
  serviceName: 'students-api',
  traceExporter: new OTLPTraceExporter({
    url: 'http://localhost:4317',
    compression: 'gzip'
  }),
  instrumentations: [
    new KnexInstrumentation(),
    new HttpInstrumentation()
  ],

})

process.on('beforeExit', async () => {
  await sdk.shutdown()
})

export const initializeTracing = async () => {
  return sdk.start()
}
