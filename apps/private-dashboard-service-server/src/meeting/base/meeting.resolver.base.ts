/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { Meeting } from "./Meeting";
import { MeetingCountArgs } from "./MeetingCountArgs";
import { MeetingFindManyArgs } from "./MeetingFindManyArgs";
import { MeetingFindUniqueArgs } from "./MeetingFindUniqueArgs";
import { DeleteMeetingArgs } from "./DeleteMeetingArgs";
import { MeetingService } from "../meeting.service";
@graphql.Resolver(() => Meeting)
export class MeetingResolverBase {
  constructor(protected readonly service: MeetingService) {}

  async _meetingsMeta(
    @graphql.Args() args: MeetingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Meeting])
  async meetings(
    @graphql.Args() args: MeetingFindManyArgs
  ): Promise<Meeting[]> {
    return this.service.meetings(args);
  }

  @graphql.Query(() => Meeting, { nullable: true })
  async meeting(
    @graphql.Args() args: MeetingFindUniqueArgs
  ): Promise<Meeting | null> {
    const result = await this.service.meeting(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Meeting)
  async deleteMeeting(
    @graphql.Args() args: DeleteMeetingArgs
  ): Promise<Meeting | null> {
    try {
      return await this.service.deleteMeeting(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
