interface props {
  id: string;
  title: string;
  description: string;
  isDone: boolean;
  DoneTask: (id: string) => void; 
  DeleteTask: (id: string) => void;
}

export default function TaskCard({
  id,
  title,
  description,
  isDone,
  DoneTask,
  DeleteTask,

}: props) {
  const btDone = () => {
    DoneTask(id);
  };

  const btDelete = () => {
    DeleteTask(id);
  };

  return (
    <div key={id} className="card mb-3">
      <div className="card-body">
        <div className="row">
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
            <h5
              className={
                isDone == true
                  ? "text-decoration-line-through card-title"
                  : "card-title"
              }
            >
              {title}
            </h5>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-4">
            <p className="card-text">{description}</p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
            <button className="btn btn-success me-2" onClick={btDone}>Done</button>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-2">
            <button className="btn btn-danger" onClick={btDelete}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
