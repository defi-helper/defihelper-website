import React, { useCallback } from 'react';
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult
} from 'react-beautiful-dnd';

import {
  Plate,
  ButtonBase,
  Button,
  Typography,
  LinkIfAccount
} from 'src/common';
import { VotingAddActionFormValues } from '../voting-action-parameters';
import { useVotingActionListStyles } from './voting-action-list.styles';

const reorder = (
  list: VotingAddActionFormValues[],
  startIndex: number,
  endIndex: number
) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export type VotingActionListProps = {
  actions: VotingAddActionFormValues[];
  onAddAnother?: () => void;
  onChange: (actions: VotingAddActionFormValues[]) => void;
  onEdit: (action: VotingAddActionFormValues) => void;
};

export const VotingActionList: React.FC<VotingActionListProps> = (props) => {
  const classes = useVotingActionListStyles();

  const handleDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) {
        return;
      }

      const actions = reorder(
        props.actions,
        result.source.index,
        result.destination.index
      );

      props.onChange(actions);
    },
    [props]
  );

  const handleDelete = useCallback(
    (actionIndex: number) => {
      const actions = props.actions.filter((_, index) => actionIndex !== index);

      props.onChange(actions);
    },
    [props]
  );

  return (
    <Plate className={classes.root}>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable-1">
          {(droppableProvided) => (
            <div
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              className={classes.list}
            >
              {props.actions.map((action, index) => {
                const { functionSig, input, contract } = action;

                const inputArgs = input.map((arg, key) => {
                  const id = [arg, key].join(',');

                  return (
                    <React.Fragment key={id}>
                      <LinkIfAccount>{arg.value}</LinkIfAccount>
                      {input.length - 1 === key ? '' : ', '}
                    </React.Fragment>
                  );
                });

                const method = (
                  <>
                    {contract}.{functionSig}({inputArgs})
                  </>
                );

                const inputStr = input.map(({ value }) => value).join(',');

                const key = `${contract}${functionSig}${inputStr}-${index}`;

                return (
                  <Draggable key={key} draggableId={key} index={index}>
                    {(draggableProvided) => (
                      <div
                        className={classes.action}
                        ref={draggableProvided.innerRef}
                        {...draggableProvided.draggableProps}
                        {...draggableProvided.dragHandleProps}
                      >
                        <Typography variant="h5" className={classes.number}>
                          {index + 1}
                        </Typography>
                        <div>
                          <Typography
                            variant="h5"
                            className={classes.actionTitle}
                          >
                            {method}
                          </Typography>
                          <ButtonBase
                            className={classes.editAction}
                            type="button"
                            onClick={() => props.onEdit(action)}
                          >
                            Edit
                          </ButtonBase>
                          <ButtonBase
                            className={classes.editAction}
                            type="button"
                            onClick={() => handleDelete(index)}
                          >
                            Delete
                          </ButtonBase>
                        </div>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {droppableProvided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      <Button
        className={classes.anotherAction}
        variant="outlined"
        type="button"
        onClick={props.onAddAnother}
      >
        + Add another action
      </Button>
    </Plate>
  );
};
