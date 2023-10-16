const allowedSuffixes = ['Repository', 'UseCase', 'Service', 'Services', 'UseCases', 'Repositories'];

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      description: 'Enforce "I" prefix for contracts, e.g.: Repository Pattern, Services, Use Cases, etc.',
    },
    fixable: 'code',
  },
  create: function (context) {
    return {
      TSInterfaceDeclaration(node) {
        const interfaceName = node.id.name;

        for (const suffix of allowedSuffixes) {

          if (interfaceName.endsWith(suffix) && !interfaceName.startsWith('I')) {

            context.report({
              node,
              message: `Interface/Contract ${interfaceName} should start with "I" prefix.`,
              fix: function (fixer) {
                const correctedName = `I${interfaceName}`;

                return fixer.replaceText(node.id, correctedName);
              },
            });
          }
        }
      },
    };
  },
};

