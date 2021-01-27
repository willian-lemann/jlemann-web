module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      accessKeyId: env('AKIAJ2NDHQOSRXMA3DMQ'),
      secretAccessKey: env('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'),
      region: 'sa-east-1',
      params: {
        Bucket: 'jlemann-storage',
      },
    },
  },
});
