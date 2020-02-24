import { Injectable } from '@angular/core';

export interface News {
  id: number
  title: string // card text
  date: any
  image?: string // card-img
  type?: string
  text?: string
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsList: News[] = [];

  constructor() {
    this.newsList.push(
      { "id": 0, "image": "assets/images/news_example1.jpg", "title": "Pope Francis rules against ordaining married men in Amazon", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" },
      { "id": 1, "image": "assets/images/news_example2.jpg", "title": "US election 2020: Iowa Democratic Party boss resigns over caucus chaos", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" },
      { "id": 2, "image": "assets/images/news_example3.jpg", "title": "England in South Africa: Eoin Morgan says his team have 'lessons to learn'", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" },
      { "id": 3, "image": "assets/images/news_example4.png", "title": "Sky Brown: Meet the 11-year-old girl set to become Britain's youngest summer Olympian", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" },
      { "id": 4, "image": "assets/images/news_example5.jpg", "title": "India’s forgotten masterpieces", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" },
      { "id": 5, "image": "assets/images/news_example6.jpg", "title": "New York’s 101-year-old pizzeria ", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" },
      { "id": 6, "image": "assets/images/news_example1.jpg", "title": "Pope Francis rules against ordaining married men in Amazon", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" },
      { "id": 7, "image": "assets/images/news_example2.jpg", "title": "US election 2020: Iowa Democratic Party boss resigns over caucus chaos", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" },
      { "id": 8, "image": "assets/images/news_example3.jpg", "title": "England in South Africa: Eoin Morgan says his team have 'lessons to learn'", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" },
      { "id": 9, "image": "assets/images/news_example4.png", "title": "Sky Brown: Meet the 11-year-old girl set to become Britain's youngest summer Olympian", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" },
      { "id": 10, "image": "assets/images/news_example5.jpg", "title": "India’s forgotten masterpieces", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" },
      { "id": 11, "image": "assets/images/news_example6.jpg", "title": "New York’s 101-year-old pizzeria ", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" },
      { "id": 12, "image": "assets/images/news_example1.jpg", "title": "Pope Francis rules against ordaining married men in Amazon", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" },
      { "id": 13, "image": "assets/images/news_example2.jpg", "title": "US election 2020: Iowa Democratic Party boss resigns over caucus chaos", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" },
      { "id": 14, "image": "assets/images/news_example3.jpg", "title": "England in South Africa: Eoin Morgan says his team have 'lessons to learn'", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" },
      { "id": 15, "image": "assets/images/news_example4.png", "title": "Sky Brown: Meet the 11-year-old girl set to become Britain's youngest summer Olympian", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" },
      { "id": 16, "image": "assets/images/news_example5.jpg", "title": "India’s forgotten masterpieces", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" },
      { "id": 17, "image": "assets/images/news_example6.jpg", "title": "New York’s 101-year-old pizzeria ", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" },
      { "id": 18, "image": "assets/images/news_example1.jpg", "title": "Pope Francis rules against ordaining married men in Amazon", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" },
      { "id": 19, "image": "assets/images/news_example2.jpg", "title": "US election 2020: Iowa Democratic Party boss resigns over caucus chaos", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" },
      { "id": 20, "image": "assets/images/news_example3.jpg", "title": "England in South Africa: Eoin Morgan says his team have 'lessons to learn'", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" },
      { "id": 21, "image": "assets/images/news_example4.png", "title": "Sky Brown: Meet the 11-year-old girl set to become Britain's youngest summer Olympian", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" },
      { "id": 22, "image": "assets/images/news_example5.jpg", "title": "India’s forgotten masterpieces", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" },
      { "id": 23, "image": "assets/images/news_example6.jpg", "title": "New York’s 101-year-old pizzeria ", "date": "11/20/2003", text: "Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient. Hundreds of passengers who tested negative for the new coronavirus have begun leaving a quarantined cruise ship in Japan amid heavy criticism over the country's handling of the outbreak. US officials said moves to contain the virus may not have been sufficient" },
    )
  }

  public getNewsList(): News[] {
    return this.newsList;
  }

  public getNews(id: number): News {
    return this.newsList.find(news => news.id === id)
  }

  public remove(id: number) {
    this.newsList = this.newsList.filter(event => event.id !== id);
  }

  public add(news: News) {
    this.newsList.push(news);
  }

  public edit(news: News) {
    const id = this.newsList.findIndex((event => event.id === news.id));
    this.newsList[id] = news;
  }
}
