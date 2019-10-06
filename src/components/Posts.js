import React from 'react';
import { List, Avatar, Icon, Card} from 'antd';

const { Meta } = Card;

const Posts = (props) => {
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      pagination={{ 
        onChange: page => { console.log(page); }, 
        pageSize: 12, 
      }}
      dataSource={props.data}
      renderItem={item => ( 
        <List.Item>
          <Card 
            //hoverable={true}
            style= {{ width: 300, textAlign: 'center' }}
              cover={
                <img 
                  style={{ height: 250, objectFit: 'cover' }}
                  src={item.image}
                />
              }
          >
            <Meta                
              // avatar={<Avatar src={item.author && item.author.user_image}/>}
              title={<a href={`/post/${item.id}`}>{item.title}</a>}
              description={item.description}
            />
          </Card>
        </List.Item>   
      )}
    />
  )
}

export default Posts;