class TaskSerializer:
    def query_to_json(self,item):
        if item.type=='Fixe':
            json_set = {
                'id': item.id,
                'name': item.name,
                'created_at': item.created_at.isoformat(),
                'begin_at': item.begin_at.isoformat(),
                'end_at': item.end_at.isoformat(),
                'deadline': None,
                'type': item.type
            }

        elif item.type=='Assignée':
            json_set = {
                'id': item.id,
                'name': item.name,
                'created_at': item.created_at.isoformat(),
                'begin_at': item.begin_at.isoformat(),
                'end_at': item.end_at.isoformat(),
                'deadline': item.deadline.isoformat(),
                'type': item.type
            }

        elif item.type=='Non-assignée' and item.deadline is not None:
            json_set = {
                'id': item.id,
                'name': item.name,
                'created_at': item.created_at.isoformat(),
                'begin_at': None,
                'end_at': None,
                'deadline': item.deadline.isoformat(),
                'type': item.type
            }

        else:
            json_set = {
                'id': item.id,
                'name': item.name,
                'created_at': item.created_at.isoformat(),
                'begin_at': None,
                'end_at': None,
                'deadline': None,
                'type':
                item.type
            }

        return json_set
