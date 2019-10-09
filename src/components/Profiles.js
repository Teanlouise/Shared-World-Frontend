import React from 'react';
import { List, Card} from 'antd';

const { Meta } = Card;

const Profiles = (props) => {
  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      pagination={{ 
        onChange: page => {console.log(page);},
        pageSize: 12,
      }}
      dataSource={props.data}
      renderItem={item => ( 
        <List.Item>
         <Card 
            style={{ width: 300, textAlign: 'center' }}
            cover={<img src={item.user_image} alt="user_image" />}
          >
          <Meta                  
            title={<a href={`/user/${item.user}`}>{item.username}</a>}
            description={item.user_bio}
          />
        </Card>
      </List.Item>   
      )}
    />
  )
}

export default Profiles;