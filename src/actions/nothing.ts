import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Nothing
 * @section Actions > Scripting > Content
 * @icon Scripting
 *
 * This action does nothing and produces no output. It is useful to separate blocks of actions, or to ensure that no input is passed to the next action.
 *
 * ```js
 * nothing();
 * ```
 */

const nothing = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.nothing',
  WFWorkflowActionParameters: {},
});

export default nothing;
